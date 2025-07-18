// components/TestimonialsSection.js
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sofía G.',
      text: 'Mi hijo espera con emoción cada clase. ¡Aprender jugando realmente funciona!',
      avatar: '/images/avatar1.png',
    },
    {
      name: 'Carlos P.',
      text: 'La plataforma está genial, y mi hija ya quiere crear su primer videojuego.',
      avatar: '/images/avatar2.png',
    },
    {
      name: 'Lucía R.',
      text: 'Como madre, me encanta que se divierta mientras aprende habilidades útiles.',
      avatar: '/images/avatar3.png',
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12">Lo que dicen los padres</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-fade-up"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full border-4 border-purple-300 mb-4"
                />
                <p className="text-lg italic mb-3">“{t.text}”</p>
                <h4 className="text-sm font-bold text-purple-600">{t.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
