import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // If an email link dumps us on "/" with tokens, forward them to /auth/callback
    if (window.location.pathname === '/' && window.location.hash.includes('access_token=')) {
      const hash = window.location.hash; // includes '#...'
      router.replace(`/auth/callback${hash}`);
    }
  }, [router]);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
