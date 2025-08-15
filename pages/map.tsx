// /pages/map.tsx
import type { GetStaticProps } from 'next';
import MainCourseMap from '@/components/map/MainCourseMap';
import { getCourses, type Course } from '@/lib/content';

export default function MapPage({ courses }: { courses: Course[] }) {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <MainCourseMap courses={courses} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const courses = getCourses(); // server-only (fs)
  return { props: { courses } };
};
