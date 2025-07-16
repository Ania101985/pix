// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Comic+Neue:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Meta adicional si deseas */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
