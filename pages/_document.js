import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <meta name="description" content="Kedubes Expo 2023 atau biasa disingkat KEPO adalah acara tahunan yang menjadi sarana pemberian informasi kepada siswa/i SMAN 12 Jakarta terkait berbagai program studi di perguruan tinggi. Kedubes Expo 2023 bertujuan memudahkan dalam menentukan pilihan masa depan untuk ke jenjang berikutnya dan diselenggarakan oleh Alumni SMAN 12 Jakarta." />
      </Head>
      <body className="scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent scrollbar-thumb-rounded scrollbar-track-rounded-xl">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
