// pages/cursos/[slug].js

import { useRouter } from 'next/router';
import Head from 'next/head';
import courses from '@/data/courses';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CourseDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <p className="text-xl font-semibold text-gray-600">
            Curso no encontrado.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{course.title} | Pix Adventures</title>
        <meta name="description" content={course.description} />
      </Head>

      <Navbar />

      <main className="bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 text-white min-h-screen pt-24 px-6 pb-20">
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-3xl shadow-xl p-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src={`/images/${course.image}`}
              alt={course.title}
              className="w-40 h-40 object-contain rounded-xl border-4 border-purple-300 shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-extrabold mb-2">{course.title}</h1>
              <p className="text-lg text-gray-700 mb-4">{course.description}</p>
              <p className="font-semibold">Nivel: {course.level}</p>
              <p className="font-semibold">Duración: {course.duration}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
