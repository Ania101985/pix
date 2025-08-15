import type { GetServerSideProps } from 'next';
import Link from 'next/link';
import { getTierAndRoleFromReq } from '@/lib/user-access';
import { canAccessLesson } from '@/lib/access';
import { getCourses, getCourseLessons } from '@/lib/content';

type Row = { lessonId: string; titleKey: string; lessonIndex: number; allowed: boolean; courseId: string };

export default function DebugAccess({ tier, role, rows }: { tier: string; role: string; rows: Row[] }) {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Debug Access</h1>
      <div className="mb-4 space-y-1">
        <div><b>tier</b>: <code>{tier}</code></div>
        <div><b>role</b>: <code>{role}</code></div>
        <p className="text-sm opacity-70">Tip: set cookies <code>forceTier</code> and <code>forceRole</code> to override for testing.</p>
      </div>

      <table className="w-full text-sm border rounded-xl overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-2 text-left">Lesson</th>
            <th className="p-2 text-left">Index</th>
            <th className="p-2 text-left">Access</th>
            <th className="p-2 text-left">Open</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.lessonId} className="border-t">
              <td className="p-2">{r.titleKey} <span className="opacity-60">({r.lessonId})</span></td>
              <td className="p-2">{r.lessonIndex}</td>
              <td className="p-2">{r.allowed ? '✅ allowed' : '🔒 blocked'}</td>
              <td className="p-2">
                <Link className="underline" href={`/lessons/${r.lessonId}`}>open lesson</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <Link className="underline" href="/map">Go to /map</Link>
      </div>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { tier, role } = getTierAndRoleFromReq(req as any);

  // Scan all courses (small sites: fine), otherwise list known course ids
  const courses = getCourses();
  const rows: Row[] = [];
  for (const c of courses) {
    const lessons = getCourseLessons(c.id);
    for (const l of lessons) {
      rows.push({
        lessonId: l.lessonId,
        titleKey: l.titleKey,
        lessonIndex: l.lessonIndex,
        courseId: l.courseId,
        allowed: canAccessLesson({ tier: tier as any, role: role as any, lessonIndex: l.lessonIndex }),
      });
    }
  }

  return { props: { tier, role, rows } };
};
