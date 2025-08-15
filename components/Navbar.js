import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FaHome } from 'react-icons/fa';

// components/Navbar.js
export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const changeLocale = (e) => {
    const next = e.target.value;
    if (next && next !== locale) {
      router.push({ pathname, query }, asPath, { locale: next });
    }
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand (unchanged) */}
        <Link href="/" className="font-extrabold text-purple-700">
          Pix Adventures
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {/* Home icon instead of text */}
          <Link
            href="/"
            aria-label={t('nav.home')}
            title={t('nav.home')}
            className="hover:text-purple-700"
          >
            <FaHome className="text-lg" />
          </Link>

          {/* Use a dedicated key for this label */}
          <Link href="#como-funciona" className="hover:text-purple-700">
            {t('nav.how')}
          </Link>

          <Link href="#cursos" className="hover:text-purple-700">
            {t('nav.courses')}
          </Link>
          <Link href="#pricing" className="hover:text-purple-700">
            {t('nav.pricing')}
          </Link>
          <Link href="#testimonials" className="hover:text-purple-700">
            {t('nav.testimonials')}
          </Link>
          <Link href="#faq" className="hover:text-purple-700">
            {t('nav.faq')}
          </Link>

          {/* Language list (no globe) */}
          <select
            value={locale || 'es'}
            onChange={changeLocale}
            className="ml-2 text-xs rounded-full border px-3 py-1 bg-white hover:bg-gray-50 cursor-pointer"
            aria-label="Select language"
            title="Select language"
          >
            <option value="es">🇪🇸 ES</option>
            <option value="en">🇬🇧 EN</option>
            <option value="pl">🇵🇱 PL</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
