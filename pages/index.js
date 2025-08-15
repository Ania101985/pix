// pages/index.js
// TEMP MARKER: PAGES ROUTER

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// pages/index.js

import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import CourseCard from '@/components/CourseCard';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import AchievementsSection from '@/components/AchievementsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import courses from '@/data/courses';
import MapWithPix from '@/components/MapWithPix'; // 👈 nuevo componente

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('head.title')}</title>
        <meta name="description" content={t('head.description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* ✅ Adjusted pt-12 to fix white space below navbar */}
      <main className="pt-12 bg-white text-gray-800">
        <Hero />

        <HowItWorks />

        {/* 🗺️ Mapa con Pix */}
        <MapWithPix />

        {/* 🧠 Cursos */}
        <section id="cursos" className="py-20 px-6 bg-white">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-12 drop-shadow-sm">{t('courses.title')}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <CourseCard
                key={course.slug}
                title={course.title}
                image={course.image}
                slug={course.slug}
              />
            ))}
          </div>
        </section>

        <TestimonialsSection />
        <PricingSection />
        <AchievementsSection />
        <FAQSection />
      </main>

      <Footer />
    </>
  );
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
