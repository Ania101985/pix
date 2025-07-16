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
  return (
    <>
      <Head>
        <title>Pix Adventures – Aprende jugando</title>
        <meta
          name="description"
          content="Plataforma gamificada para aprender programación desde los 6 años"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-20 bg-white text-gray-800">
        <Hero />
        <HowItWorks />

        {/* 🗺️ Mapa con Pix */}
        <MapWithPix />

        {/* 🧠 Cursos */}
        <section id="cursos" className="py-20 px-6 bg-white">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-12 drop-shadow-sm">
            Nuestros Cursos
          </h2>

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
