import { useTranslation } from 'next-i18next';
// components/FAQSection.jsx
import { useState } from 'react';

export default function FAQSection() {
  const { t } = useTranslation('common');
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: t('faq.items.1.question'),
      answer: t('faq.items.1.answer'),
    },
    {
      question: t('faq.items.2.question'),
      answer: t('faq.items.2.answer'),
    },
    {
      question: t('faq.items.3.question'),
      answer: t('faq.items.3.answer'),
    },
    {
      question: t('faq.items.4.question'),
      answer: t('faq.items.4.answer'),
    },
  ];

  return (
    <section className="py-16 px-4 bg-white" id="faq">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-purple-700 mb-8">
          {t('faq.section_title')}
        </h2>
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
                <span>{openIndex === index ? '−' : '+'}</span>
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
