import { GetServerSideProps } from 'next';
import CourseStageMap from '@/components/map/CourseStageMap';
import { getCourseMap } from '@/lib/content';
import { getTierAndRoleFromReq } from '@/lib/user-access';

export default function CourseMap({ courseId, stages, lessons, tier, role }: any) {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Course map</h1>
      <CourseStageMap courseId={courseId} stages={stages} lessons={lessons} tier={tier} role={role} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { courseId } = ctx.query as { courseId: string };
  const { tier, role } = getTierAndRoleFromReq(ctx.req as any);
  const map = getCourseMap(courseId);
  return { props: { courseId, stages: map.stages, lessons: map.lessons, tier, role } };
};
