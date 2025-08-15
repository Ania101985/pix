import Link from 'next/link';
import { getCourses, getCourseLessons } from '@/lib/content';

export default function DebugLinks({ links }: { links: { href: string; label: string }[] }) {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Quick Links</h1>
      <ul className="list-disc ml-6 space-y-2">
        {links.map((l) => <li key={l.href}><Link className="underline" href={l.href}>{l.label}</Link></li>)}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const links = [{ href: '/map', label: '/map' }];
  const courses = getCourses();
  for (const c of courses) {
    links.push({ href: `/courses/${c.id}/map`, label: `/courses/${c.id}/map` });
    const lessons = getCourseLessons(c.id).slice(0, 6);
    lessons.forEach((l) => links.push({ href: `/lessons/${l.lessonId}`, label: `/lessons/${l.lessonId}` }));
    // first activity of first two lessons if present
    lessons.slice(0, 2).forEach((l) => {
      if (l.activityIds?.[0]) links.push({ href: `/activities/${l.activityIds[0]}`, label: `/activities/${l.activityIds[0]}` });
    });
  }
  return { props: { links } };
}
