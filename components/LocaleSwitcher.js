// components/LocaleSwitcher.js
'use client';
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const cycle = locale === 'es' ? 'en' : locale === 'en' ? 'pl' : 'es';
  return (
    <button
      onClick={() => router.push({ pathname, query }, asPath, { locale: cycle })}
      className="text-xs px-3 py-1 rounded-full border hover:bg-gray-50"
      aria-label="Change language"
    >
      {locale?.toUpperCase?.() || 'ES'}
    </button>
  );
}
