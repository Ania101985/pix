// components/FAQSection.jsx
import { useState } from 'react';

const faqs = [
  {
    question: "¿A partir de qué edad pueden usar Pix Adventures?",
    answer: "Recomendamos a partir de los 7 años. Nuestros cursos están diseñados para ser accesibles, divertidos y guiados paso a paso.",
  },
  {
    question: "¿Necesitan conocimientos previos?",
    answer: "No. Todo está pensado para principiantes. Comienzan desde cero y avanzan con retos y juegos.",
  },
  {
    question: "¿Qué pasa si mi hijo pierde el interés?",
    answer: "Puedes cancelar tu suscripción en cualquier momento. Además, constantemente añadimos nuevos retos y personajes para mantener el interés.",
  },
  {
    question: "¿Qué diferencia hay entre los planes?",
    answer: "Todos los planes incluyen acceso a cursos. Los planes superiores añaden más funciones como seguimiento para padres, sesiones en vivo y más perfiles.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-4 bg-white" id="faq">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-purple-200 rounded-xl shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-4 text-lg font-medium text-purple-700 hover:bg-purple-50"
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
