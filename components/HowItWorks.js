import { FaCompass, FaGamepad, FaChartLine } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-20 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-purple-800 mb-4 flex items-center justify-center gap-2"
        >
          🎯 ¿Cómo funciona?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-xl mx-auto mb-14"
        >
          En Pix Adventures, aprender programación es una aventura divertida, guiada y personalizada.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            icon: <FaCompass className="text-2xl" />,
            title: '1. Elige un curso',
            text: 'Aventuras adaptadas según la edad y nivel de tu hijo. Cada curso comienza con una historia atrapante.',
          }, {
            icon: <FaGamepad className="text-2xl" />,
            title: '2. Aprende jugando',
            text: 'Completa misiones y retos en mundos interactivos, mientras aprendes programación paso a paso.',
          }, {
            icon: <FaChartLine className="text-2xl" />,
            title: '3. Mide el progreso',
            text: 'Padres y educadores pueden seguir avances, logros y recibir sugerencias personalizadas.',
          }].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white border border-purple-100 shadow-md hover:shadow-lg transition p-6 text-left"
            >
              <div className="flex items-center gap-3 text-purple-700 mb-3 text-xl font-semibold">
                {step.icon} {step.title}
              </div>
              <p className="text-gray-700 text-sm">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
