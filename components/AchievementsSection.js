// components/AchievementsSection.js

export default function AchievementsSection() {
  const achievements = [
    {
      icon: '🏅',
      title: 'Explorador Digital',
      description: 'Completó su primer curso y comenzó su viaje en la programación.',
    },
    {
      icon: '🧠',
      title: 'Ninja del Código',
      description: 'Superó retos lógicos y dominó la programación con bloques.',
    },
    {
      icon: '🚀',
      title: 'Maestro Creativo',
      description: 'Publicó su primer proyecto de videojuego o app.',
    },
    {
      icon: '💡',
      title: 'Lógico Avanzado',
      description: 'Aplicó estructuras condicionales y bucles en sus proyectos.',
    },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-r from-pink-600 via-purple-700 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12">Logros y Niveles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-3xl p-6 flex flex-col items-center shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-md"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
