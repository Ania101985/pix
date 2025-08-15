import { useState } from 'react';
import { saveAttempt } from '@/lib/progress';

export default function Quiz({ activity }: any) {
  const [done, setDone] = useState(false);
  const q = activity?.props || {};
  return (
    <div className="p-4 border rounded">
      <h2 className="text-lg font-bold">Quiz Activity</h2>
      <p className="mt-2">{q.question || 'Question?'}</p>
      <div className="mt-3 grid gap-2">
        {(q.options || ['A','B']).map((o: string, i: number) => (
          <button
            key={i}
            className="border rounded-xl px-3 py-2 text-left disabled:opacity-50"
            disabled={done}
            onClick={() => {
              const correct = i === (q.correctIndex ?? 0);
              saveAttempt({ activityId: activity.id, score: correct ? 100 : 0, correct });
              setDone(true);
            }}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}
