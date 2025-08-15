import { GetServerSideProps } from 'next';
import Link from 'next/link';
import ActivityRenderer from '@/components/activities/ActivityRenderer';
import { getActivityConfig, findLessonByActivity } from '@/lib/content';
import { canAccessLesson } from '@/lib/access';
import { getTierAndRoleFromReq } from '@/lib/user-access';
import { markLessonComplete } from '@/lib/progress';

export default function ActivityPage({
  cfg,
  courseId,
  lessonId,
  indexInLesson,
  totalInLesson
}: {
  cfg: any;
  courseId: string;
  lessonId: string;
  indexInLesson: number;
  totalInLesson: number;
}) {
  const isLast = indexInLesson === totalInLesson - 1;
  const prevId = indexInLesson > 0 ? cfg?.siblings?.[indexInLesson - 1] : null;
  const nextId = !isLast ? cfg?.siblings?.[indexInLesson + 1] : null;

  return (
    <main className="max-w-3xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm opacity-70">
          Lesson {lessonId} • Activity {indexInLesson + 1} / {totalInLesson}
        </div>
        <div className="flex gap-2">
          {prevId ? (
            <Link className="border rounded-xl px-3 py-1" href={`/activities/${prevId}`}>← Prev</Link>
          ) : (
            <span className="px-3 py-1 opacity-40 border rounded-xl">← Prev</span>
          )}

          {!isLast && nextId && (
            <Link className="border rounded-xl px-3 py-1" href={`/activities/${nextId}`}>Next →</Link>
          )}

          {isLast && (
            <button
              className="bg-black text-white rounded-xl px-3 py-1"
              onClick={async () => {
                // last activity → mark lesson complete
                await markLessonComplete({
                  courseId,
                  lessonId,
                  lastActivityIndex: indexInLesson
                });
                alert('Lesson marked complete ✅');
                window.location.href = `/lessons/${lessonId}`;
              }}
            >
              Finish lesson ✓
            </button>
          )}
        </div>
      </div>

      <ActivityRenderer cfg={cfg} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const activityId = params!.activityId as string;
  const cfg = getActivityConfig(activityId);
  if (!cfg) return { notFound: true };

  // Which lesson contains this activity?
  const loc = findLessonByActivity(activityId);
  if (!loc) return { notFound: true };
  const { lesson, indexInLesson, totalInLesson } = loc;

  // Gate access
  const { tier, role } = getTierAndRoleFromReq(req as any);
  const allowed = canAccessLesson({ tier: tier as any, role: role as any, lessonIndex: lesson.lessonIndex });
  if (!allowed) {
    return { redirect: { destination: `/paywall?courseId=${lesson.courseId}`, permanent: false } };
  }

  // Give the client the sibling activity ids for Prev/Next nav
  const cfgWithSiblings = { ...cfg, siblings: lesson.activityIds };

  return {
    props: {
      cfg: cfgWithSiblings,
      courseId: lesson.courseId,
      lessonId: lesson.lessonId,
      indexInLesson,
      totalInLesson
    }
  };
};
