import { useState } from 'react';
import Link from 'next/link';
import UpsellModal from '@/components/paywall/UpsellModal';
import { canAccessLesson, Role, Tier } from '@/lib/access';

type Stage = { stageIndex: number; titleKey: string };
type LessonMeta = { lessonId: string; titleKey: string; lessonIndex: number; stageIndex: number };

export default function CourseStageMap({
  courseId, stages, lessons, tier, role,
}: { courseId: string; stages: Stage[]; lessons: LessonMeta[]; tier: Tier; role: Role; }) {
  const [open, setOpen] = useState(false);
  const grouped = stages.map(s => ({ stage: s, lessons: lessons.filter(l => l.stageIndex === s.stageIndex) }));
  return (
    <div>
      <UpsellModal open={open} onClose={() => setOpen(false)} />
      {grouped.map(({ stage, lessons }) => (
        <section key={stage.stageIndex} className="mb-6">
          <h3 className="font-semibold mb-3">Stage {stage.stageIndex + 1}</h3>
          <div className="flex flex-wrap gap-2">
            {lessons.map(l => {
              const allowed = canAccessLesson({ tier, role, lessonIndex: l.lessonIndex });
              return allowed ? (
                <Link key={l.lessonId} href={`/lessons/${l.lessonId}`} className="px-3 py-2 rounded-full bg-emerald-100 hover:bg-emerald-200">{l.titleKey}</Link>
              ) : (
                <button key={l.lessonId} onClick={() => setOpen(true)} className="px-3 py-2 rounded-full bg-gray-100">🔒 {l.titleKey}</button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
