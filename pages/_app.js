import '@/styles/globals.css';
import { Audiowide } from 'next/font/google';

const audiowide = Audiowide({ subsets: ['latin'], weight: '400' });

export default function App({ Component, pageProps }) {
  return (
    <main className={audiowide.className}>
      <Component {...pageProps} />
    </main>
  );
}
