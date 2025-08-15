import Link from 'next/link';

type Course = { id: string; titleKey: string; icon?: string };

export default function MainCourseMap({ courses }: { courses: Course[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((c) => (
        <Link key={c.id} href={`/courses/${c.id}/map`} className="rounded-2xl border p-4 hover:shadow">
          <div className="text-2xl">{c.icon || '📚'}</div>
          <div className="font-semibold">{c.titleKey}</div>
        </Link>
      ))}
    </div>
  );
}
