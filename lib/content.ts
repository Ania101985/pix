// /lib/content.ts
// Server-only JSON content loader for Pix Adventures
// Do NOT import from client components.

import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Course = {
  id: string;       // e.g. "scratch"
  titleKey: string; // i18n key, e.g. "course.scratch"
  icon?: string;    // optional icon path
};

export type Stage = {
  stageIndex: number; // 0..9
  titleKey: string;   // i18n key, e.g. "stage.scratch_0"
};

export type LessonMeta = {
  lessonId: string;      // unique id, e.g. "scratch_0_3"
  courseId: string;      // parent course id
  stageIndex: number;    // 0..9
  indexInStage: number;  // 0..9
  titleKey: string;      // i18n key, e.g. "lesson.scratch_0_3"
  activityIds: string[]; // ordered list of activities
  lessonIndex: number;   // computed global index in course
};

export type ActivityConfig =
  | { id: string; type: "quiz"; props: any }
  | { id: string; type: "dragdrop"; props: any }
  | { id: string; type: "iframe"; props: any }
  | (Record<string, any> & { id: string; type: string });

/** Utility to read + parse JSON from file. */
function readJSON<T = any>(p: string): T {
  const raw = fs.readFileSync(p, "utf8");
  return JSON.parse(raw) as T;
}

/** ---- COURSES ---- */
export function getCourses(): Course[] {
  const p = path.join(CONTENT_DIR, "courses.json");
  return readJSON<Course[]>(p);
}

/** ---- STAGES ---- */
export function getCourseStages(courseId: string): Stage[] {
  const stagesDir = path.join(CONTENT_DIR, courseId, "stages");
  if (!fs.existsSync(stagesDir)) return [];

  return fs
    .readdirSync(stagesDir)
    .filter((f) => fs.statSync(path.join(stagesDir, f)).isDirectory())
    .map((folder) =>
      readJSON<Stage>(path.join(stagesDir, folder, "stage.json"))
    )
    .sort((a, b) => a.stageIndex - b.stageIndex);
}

/** ---- LESSONS ---- */
export function getCourseLessons(courseId: string): LessonMeta[] {
  const stagesDir = path.join(CONTENT_DIR, courseId, "stages");
  if (!fs.existsSync(stagesDir)) return [];

  let lessons: LessonMeta[] = [];

  fs.readdirSync(stagesDir)
    .filter((f) => fs.statSync(path.join(stagesDir, f)).isDirectory())
    .forEach((stageFolder) => {
      const stagePath = path.join(stagesDir, stageFolder, "lessons");
      if (!fs.existsSync(stagePath)) return;

      const stageIndex = readJSON<Stage>(
        path.join(stagesDir, stageFolder, "stage.json")
      ).stageIndex;

      fs.readdirSync(stagePath)
        .filter((f) => fs.statSync(path.join(stagePath, f)).isDirectory())
        .forEach((lessonFolder) => {
          const lessonData = readJSON<Omit<LessonMeta, "lessonIndex">>(
            path.join(stagePath, lessonFolder, "lesson.json")
          );
          lessons.push({
            ...lessonData,
            courseId: lessonData.courseId ?? courseId,
            stageIndex,
            lessonIndex:
              stageIndex * 10 + (lessonData.indexInStage ?? 0),
          });
        });
    });

  return lessons.sort((a, b) => a.lessonIndex - b.lessonIndex);
}

/** ---- ACTIVITIES ---- */
export function getLessonActivities(
  courseId: string,
  stageIndex: number,
  lessonIndex: number
): ActivityConfig[] {
  const activitiesDir = path.join(
    CONTENT_DIR,
    courseId,
    "stages",
    `stage-${stageIndex}`,
    "lessons",
    `lesson-${lessonIndex}`,
    "activities"
  );

  if (!fs.existsSync(activitiesDir)) return [];

  return fs
    .readdirSync(activitiesDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const activityId = path.basename(f, ".json");
      const cfg = readJSON<ActivityConfig>(path.join(activitiesDir, f));
      return { id: activityId, ...cfg };
    });
}

/** ---- FULL COURSE MAP ---- */
export function getCourseMap(courseId: string) {
  return {
    course: getCourses().find((c) => c.id === courseId) || null,
    stages: getCourseStages(courseId),
    lessons: getCourseLessons(courseId),
  };
}

/** ---- FIND LESSON BY ID ---- */
export function getLessonMeta(lessonId: string): LessonMeta | null {
  for (const c of getCourses()) {
    const lessons = getCourseLessons(c.id);
    const found = lessons.find((l) => l.lessonId === lessonId);
    if (found) return found;
  }
  return null;
}

/** ---- FIND LESSON BY ACTIVITY ---- */
export function findLessonByActivity(activityId: string) {
  for (const c of getCourses()) {
    const lessons = getCourseLessons(c.id);
    for (const l of lessons) {
      if (l.activityIds.includes(activityId)) {
        return {
          lesson: l,
          indexInLesson: l.activityIds.indexOf(activityId),
          totalInLesson: l.activityIds.length,
        };
      }
    }
  }
  return null;
}
