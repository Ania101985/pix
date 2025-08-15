// /pages/debug/progress.tsx
import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { supabase } from '@/lib/supabaseClient'; // if your client is a default export, change to: import supabase from '@/lib/supabaseClient'
import { saveAttempt, markLessonComplete } from '@/lib/progress';

type Attempt = {
  id: string;
  child_id: string;
  activity_id: string;
  score: number | null;
  correct: boolean | null;
  time_spent_seconds: number | null;
  attempts: number | null;
  created_at: string;
};

type Progress = {
  child_id: string;
  course_id: string;
  lesson_id: string;
  last_activity_index: number;
  status: 'in_progress' | 'completed';
  updated_at: string;
};

const DebugProgress: NextPage = () => {
  const [childId, setChildId] = useState('');
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [progress, setProgress] = useState<Progress[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  // Load child_id from localStorage on mount
  useEffect(() => {
    const cid = typeof window !== 'undefined' ? localStorage.getItem('child_id') || '' : '';
    setChildId(cid);
  }, []);

  async function load() {
    if (!childId) {
      setMsg('Set a child_id first.');
      return;
    }
    setBusy(true);
    setMsg(null);
    try {
      // Filtered by child
      const { data: a, error: ae } = await supabase
        .from('activity_attempts')
        .select('*')
        .eq('child_id', childId)
        .order('created_at', { ascending: false });
      if (ae) throw ae;
      setAttempts((a as Attempt[]) || []);

      const { data: p, error: pe } = await supabase
        .from('progress')
        .select('*')
        .eq('child_id', childId)
        .order('updated_at', { ascending: false });
      if (pe) throw pe;
      setProgress((p as Progress[]) || []);
    } catch (err: any) {
      console.error('[debug/progress] load error', err);
      setMsg(`Load error: ${err?.message || String(err)}`);
    } finally {
      setBusy(false);
    }
  }

  function saveChildId() {
    if (!childId) {
      setMsg('child_id is empty.');
      return;
    }
    localStorage.setItem('child_id', childId);
    setMsg('child_id saved. Click "Refresh lists" to reload.');
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Debug: Progress</h1>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <input
          className="border rounded px-3 py-2 w-[420px]"
          placeholder="child_id (uuid)"
          value={childId}
          onChange={(e) => setChildId(e.target.value)}
        />
        <button
          className="px-3 py-2 rounded border"
          onClick={saveChildId}
        >
          Save child_id
        </button>
        <button
          className="px-3 py-2 rounded bg-black text-white disabled:opacity-50"
          disabled={busy}
          onClick={load}
        >
          {busy ? 'Loading…' : 'Refresh lists'}
        </button>
        <button
          className="px-3 py-2 rounded border"
          onClick={async () => {
            if (!childId) { setMsg('Set child_id first.'); return; }
            // Use a known activity id from your content (e.g., act-quiz-1)
            console.log('[debug] creating test attempt for act-quiz-1');
            await saveAttempt({ activityId: 'act-quiz-1', score: 100, correct: true });
            setMsg('Test attempt created (if allowed). Click "Refresh lists".');
          }}
        >
          Create test attempt
        </button>
        <button
          className="px-3 py-2 rounded border"
          onClick={async () => {
            if (!childId) { setMsg('Set child_id first.'); return; }
            // Replace with a real course/lesson you have
            const courseId = 'demo';
            const lessonId = 'demo-1';
            console.log('[debug] marking lesson complete', { courseId, lessonId });
            await markLessonComplete({ courseId, lessonId, lastActivityIndex: 0 });
            setMsg('Marked lesson complete (if allowed). Click "Refresh lists".');
          }}
        >
          Mark lesson complete
        </button>
      </div>

      {msg && (
        <div className="mb-4 rounded border px-3 py-2 text-sm">{msg}</div>
      )}

      {/* Attempts */}
      <section className="mb-6">
        <h2 className="font-semibold mb-2">activity_attempts</h2>
        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
{JSON.stringify(attempts, null, 2)}
        </pre>
      </section>

      {/* Progress */}
      <section>
        <h2 className="font-semibold mb-2">progress</h2>
        <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">
{JSON.stringify(progress, null, 2)}
        </pre>
      </section>
    </main>
  );
};

export default DebugProgress;
