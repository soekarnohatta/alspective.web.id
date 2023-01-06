import '../styles/globals.css'
import Navbar from "../components/Navbar"

export default function App({ Component, pageProps }) {
  return (
    <div className="h-screen">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
