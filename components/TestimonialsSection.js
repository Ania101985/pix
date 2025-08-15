import { useTranslation } from 'next-i18next';

// components/TestimonialsSection.js
export default function TestimonialsSection() {
  const { t } = useTranslation('common');

  const testimonials = [
    {
      name: 'Sofía G.',
      text: t('testimonials.items.1.text'),
      avatar: '/images/avatar1.png',
    },
    {
      name: 'Carlos P.',
      text: t('testimonials.items.2.text'),
      avatar: '/images/avatar2.png',
    },
    {
      name: 'Lucía R.',
      text: t('testimonials.items.3.text'),
      avatar: '/images/avatar3.png',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          {t('testimonials.section_title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((tItem, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-fade-up"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={tItem.avatar}
                  alt={tItem.name}
                  className="w-20 h-20 rounded-full border-4 border-purple-300 mb-4"
                />
                <p className="text-lg italic mb-3">“{tItem.text}”</p>
                <h4 className="text-sm font-bold text-purple-600">{tItem.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
