'use client'; // harmless in pages/, required if you ever move this into app/

import * as React from 'react';
import { useRouter } from 'next/router';
import { FaGlobe } from 'react-icons/fa';

const ORDER = ['es', 'en', 'pl'];

export default function LanguageSwitcher({ className = '' }) {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;
  const current = locale || 'es';

  const cycleLocale = React.useCallback(() => {
    const i = ORDER.indexOf(current);
    const next = ORDER[(i + 1) % ORDER.length];
    router.push({ pathname, query }, asPath, { locale: next });
  }, [current, pathname, query, asPath, router]);

  const onSelect = React.useCallback(
    (e) => {
      const next = e.target.value;
      if (next && next !== current) {
        router.push({ pathname, query }, asPath, { locale: next });
      }
    },
    [current, pathname, query, asPath, router]
  );

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Cycle button ES → EN → PL */}
      <button
        type="button"
        onClick={cycleLocale}
        className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs hover:bg-gray-50"
        title="Change language"
        aria-label="Change language"
      >
        <FaGlobe className="opacity-70" />
        <span className="font-semibold">{current.toUpperCase()}</span>
      </button>

      {/* Optional direct picker (kept hidden on small screens) */}
      <select
        value={current}
        onChange={onSelect}
        className="hidden md:block text-xs rounded-full border px-2 py-1 bg-white hover:bg-gray-50"
        aria-label="Select language"
      >
        <option value="es">🇪🇸 ES</option>
        <option value="en">🇬🇧 EN</option>
        <option value="pl">🇵🇱 PL</option>
      </select>
    </div>
  );
}
