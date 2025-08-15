import { useTranslation } from 'next-i18next';

export default function PricingSection() {
  const { t } = useTranslation('common');

  const plans = [
    {
      name: t('pricing.plans.explorer.name'),
      price: t('pricing.plans.explorer.price'),
      description: t('pricing.plans.explorer.description'),
      color: 'from-yellow-400 to-orange-300',
      benefits: [
        t('pricing.plans.explorer.benefits.1'),
        t('pricing.plans.explorer.benefits.2'),
        t('pricing.plans.explorer.benefits.3'),
      ],
      icon: '🧭',
    },
    {
      name: t('pricing.plans.adventurer.name'),
      price: t('pricing.plans.adventurer.price'),
      description: t('pricing.plans.adventurer.description'),
      color: 'from-purple-500 to-fuchsia-500',
      benefits: [
        t('pricing.plans.adventurer.benefits.1'),
        t('pricing.plans.adventurer.benefits.2'),
        t('pricing.plans.adventurer.benefits.3'),
        t('pricing.plans.adventurer.benefits.4'),
      ],
      icon: '🧗',
      popular: true,
    },
    {
      name: t('pricing.plans.family.name'),
      price: t('pricing.plans.family.price'),
      description: t('pricing.plans.family.description'),
      color: 'from-sky-500 to-blue-400',
      benefits: [
        t('pricing.plans.family.benefits.1'),
        t('pricing.plans.family.benefits.2'),
        t('pricing.plans.family.benefits.3'),
        t('pricing.plans.family.benefits.4'),
      ],
      icon: '🏠',
    },
  ];

  return (
    <section className="relative py-20 bg-[url('/hero-pattern.svg')] bg-white bg-repeat text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-4 drop-shadow-md">
          🗺️ {t('pricing.section_title')}
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          {t('pricing.section_subtitle')}
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-[30px] p-8 shadow-xl border-4 border-dashed border-white relative bg-gradient-to-br ${plan.color} text-white hover:scale-105 transition-transform duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-white text-purple-700 text-xs font-bold px-3 py-1 rounded-bl-xl shadow">
                  {t('pricing.most_popular')}
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
                {t('pricing.select_plan')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
