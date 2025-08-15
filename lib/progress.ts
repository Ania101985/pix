// /lib/progress.ts
import { supabase } from '@/lib/supabaseClient'; // make sure this path & export name match your file

function getTestChildId(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('child_id');
}

export async function saveAttempt({
  childId,
  activityId,
  score,
  correct,
  timeSpentSeconds,
}: {
  childId?: string;
  activityId: string;
  score: number;
  correct: boolean;
  timeSpentSeconds?: number;
}) {
  const cid = childId || getTestChildId();
  console.log('[saveAttempt] starting', { cid, activityId, score, correct });

  if (!cid) {
    console.warn('[saveAttempt] no childId found (set localStorage.setItem("child_id","<uuid>"))');
    alert('No child_id set. Open /debug/progress, set it, then try again.');
    return;
  }

  const { data, error, status } = await supabase
    .from('activity_attempts')
    .insert({
      child_id: cid,
      activity_id: activityId,
      score,
      correct,
      time_spent_seconds: timeSpentSeconds ?? null,
      attempts: 1,
    })
    .select('*')
    .single();

  console.log('[saveAttempt] response', { status, data, error });
  if (error) {
    alert(`saveAttempt error: ${error.message}`);
  } else {
    alert('Attempt saved ✅');
  }
}

export async function markLessonComplete({
  childId,
  courseId,
  lessonId,
  lastActivityIndex,
}: {
  childId?: string;
  courseId: string;
  lessonId: string;
  lastActivityIndex: number;
}) {
  const cid = childId || getTestChildId();
  console.log('[markLessonComplete] starting', { cid, courseId, lessonId, lastActivityIndex });

  if (!cid) {
    console.warn('[markLessonComplete] no childId set');
    alert('No child_id set. Open /debug/progress, set it, then try again.');
    return;
  }

  const { data, error, status } = await supabase
    .from('progress')
    .upsert({
      child_id: cid,
      course_id: courseId,
      lesson_id: lessonId,
      last_activity_index: lastActivityIndex,
      status: 'completed',
    })
    .select('*')
    .single();

  console.log('[markLessonComplete] response', { status, data, error });
  if (error) alert(`markLessonComplete error: ${error.message}`);
}
