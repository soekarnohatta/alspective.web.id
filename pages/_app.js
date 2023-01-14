import '../styles/globals.css'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kedubes Expo 2023</title>
      </Head>
      <div>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
