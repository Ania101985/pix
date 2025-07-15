export default function PricingSection() {
  const plans = [
    {
      name: "Explorador",
      price: "€30/mes",
      description: "Comienza tu aventura con lo esencial",
      color: "from-yellow-400 to-orange-300",
      benefits: [
        "1 curso activo",
        "Acceso a juegos educativos",
        "Soporte por email",
      ],
      icon: "🧭",
    },
    {
      name: "Aventurero",
      price: "€29/mes",
      description: "Desbloquea todos los retos",
      color: "from-purple-500 to-fuchsia-500",
      benefits: [
        "Acceso ilimitado a todos los cursos",
        "Retos gamificados",
        "Soporte prioritario",
        "Certificados digitales",
      ],
      icon: "🧗",
      popular: true,
    },
    {
      name: "Familiar",
      price: "€49/mes",
      description: "La experiencia completa para toda la familia",
      color: "from-sky-500 to-blue-400",
      benefits: [
        "Hasta 3 perfiles de niños",
        "Todo lo del Plan Aventurero",
        "Seguimiento para padres",
        "Sesiones en vivo semanales",
      ],
      icon: "🏠",
    },
  ];

  return (
    <section className="relative py-20 bg-[url('/hero-pattern.svg')] bg-white bg-repeat text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-4 drop-shadow-md">
          🗺️ Elige tu Aventura
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          Planes pensados para aprender jugando desde casa
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[30px] p-8 shadow-xl border-4 border-dashed border-white relative bg-gradient-to-br ${plan.color} text-white hover:scale-105 transition-transform duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-white text-purple-700 text-xs font-bold px-3 py-1 rounded-bl-xl shadow">
                  Más popular
                </div>
              )}

              <div className="text-5xl mb-4">{plan.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-xl font-extrabold mb-4">{plan.price}</p>
              <p className="italic text-sm mb-6">{plan.description}</p>

              <ul className="text-left mb-6 space-y-2 text-sm">
                {plan.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>✨</span> <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              <button className="bg-white text-purple-700 font-bold py-2 px-6 rounded-full shadow hover:bg-purple-100 transition">
                Elegir plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
