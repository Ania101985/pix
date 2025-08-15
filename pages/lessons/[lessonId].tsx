import { GetServerSideProps } from 'next';
import { getLessonMeta } from '@/lib/content';
import { canAccessLesson } from '@/lib/access';
import { getTierAndRoleFromReq } from '@/lib/user-access';
import LessonNavigator from '@/components/lesson/LessonNavigator';

export default function LessonPage({ lesson }: any) {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">{lesson.titleKey}</h1>
      <LessonNavigator lessonTitle={lesson.titleKey} activityIds={lesson.activityIds} currentIndex={0} />
      <ul className="list-disc ml-6">{lesson.activityIds.map((a: string) => <li key={a}><a className="link" href={`/activities/${a}`}>{a}</a></li>)}</ul>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params, req }) => {
  const lesson = getLessonMeta(params!.lessonId as string);
  if (!lesson) return { notFound: true };
  const { tier, role } = getTierAndRoleFromReq(req as any);
  const allowed = canAccessLesson({ tier, role, lessonIndex: lesson.lessonIndex });
  if (!allowed) return { redirect: { destination: `/paywall?courseId=${lesson.courseId}`, permanent: false } };
  return { props: { lesson } };
};
