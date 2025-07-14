import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "\u201c\u00a1Mi hijo espera con emoci\u00f3n cada clase! Aprende mientras juega y no se da cuenta de todo lo que est\u00e1 logrando.\u201d",
    author: "Luc\u00eda, mam\u00e1 de Diego (7 a\u00f1os)",
    role: "parent",
    border: "border-yellow-400",
    shadow: "shadow-yellow-300",
  },
  {
    id: 2,
    text: "\u201cAntes no le interesaba la tecnolog\u00eda, \u00a1ahora quiere hacer su propio juego! Gracias por hacerlo tan divertido.\u201d",
    author: "Pedro, pap\u00e1 de Sof\u00eda (9 a\u00f1os)",
    role: "parent",
    border: "border-pink-400",
    shadow: "shadow-pink-300",
  },
  {
    id: 3,
    text: "\u201cUna herramienta excelente en el aula. Los personajes y retos mantienen a los ni\u00f1os motivados y aprendiendo.\u201d",
    author: "Elena, profesora de primaria",
    role: "teacher",
    border: "border-blue-400",
    shadow: "shadow-blue-300",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function TestimonialsSection() {
  return (
    <section className="bg-[url('/hero-pattern.svg')] bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 drop-shadow mb-12">
          <span role="img" aria-label="chat">\ud83d\udcac</span> Lo que dicen sobre nosotros
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className={`bg-white p-6 rounded-[30px] border-4 ${item.border} ${item.shadow} shadow-lg hover:scale-105 transition-transform duration-300`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              custom={index}
            >
              <div className="text-4xl mb-2">{item.role === 'teacher' ? '👩‍🏫' : '👨‍👩‍👧'}</div>
              <p className="text-gray-800 italic text-lg mb-4">{item.text}</p>
              <p className="font-bold text-purple-700">{item.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
