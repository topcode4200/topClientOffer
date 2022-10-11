import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        {/* font family baloo bhai 2 start */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap"
          rel="stylesheet"
        />
        {/* font family baloo bhai 2 end */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
