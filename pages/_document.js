import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Fuentes de Google */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;700&family=Baloo+2:wght@400;700&family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
