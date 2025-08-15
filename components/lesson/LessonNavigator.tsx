import Link from 'next/link';
export default function LessonNavigator({ lessonTitle, activityIds, currentIndex }: {
  lessonTitle: string; activityIds: string[]; currentIndex: number;
}) {
  const prev = currentIndex > 0 ? activityIds[currentIndex - 1] : null;
  const next = currentIndex < activityIds.length - 1 ? activityIds[currentIndex + 1] : null;
  return (
    <nav className="flex items-center justify-between my-4">
      <div className="font-semibold">{lessonTitle}</div>
      <div className="flex gap-2">
        {prev ? <Link className="border rounded-xl px-3 py-1" href={`/activities/${prev}`}>← Prev</Link> : <span className="opacity-40 px-3 py-1">← Prev</span>}
        {next ? <Link className="border rounded-xl px-3 py-1" href={`/activities/${next}`}>Next →</Link> : <span className="opacity-40 px-3 py-1">Next →</span>}
      </div>
    </nav>
  );
}
