import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta name="description" content="Alspective 2023 atau biasa adalah acara tahunan yang menjadi sarana penyaluran bakat kepada siswa/i SMA/SMP/Sederajat di Indonesia. Alspective diselenggarakan oleh OSIS SMA Islam Al Azhar 19 Jakarta." />
      </Head>
      <body className="scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent scrollbar-thumb-rounded scrollbar-track-rounded-xl scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
