// pages/courses/index.tsx
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { getCourses } from '@/lib/content'

export default function CoursesPage({ courses }: { courses:any[] }) {
  const { t } = useTranslation('common')
  return (
    <main className="mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold mb-6">{t('courses.title', 'Explore Courses')}</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((c) => (
          <Link
            key={c.id}
            href={`/courses/${c.id}`}
            className="rounded-2xl p-5 shadow hover:shadow-lg transition bg-white"
          >
            <img
              alt=""
              src={c.icon || '/icons/placeholder.png'}
              className="h-12 w-12 mb-3"
            />
            <h3 className="text-xl font-semibold">{t(c.titleKey)}</h3>
          </Link>
        ))}
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const courses = await getCourses()
  return {
    props: {
      courses,
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  }
}
