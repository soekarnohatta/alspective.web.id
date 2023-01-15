import Link from "next/link";
import {useState, useEffect} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {BsFillTriangleFill} from "react-icons/bs";

export default function Navbar() {
  const [navbar, toggleNavbar] = useState(false);

  useEffect(() => {
    if(navbar) {
        document.querySelector("body").classList.add("overflowHidden");
    } else {
        document.querySelector("body").classList.remove("overflowHidden");
    }
  })

  const handleClose = (e) => {
    if (e.target.id === "wrapper") toggleNavbar(false);
  }

  return (
    <div>
      <div className="shadow-lg shadow-white/25 fixed flex justify-between top-8 xs:left-[1.55rem] lg:left-[2.6rem] rounded-full bg-white py-2 xs:px-6 lg:px-8 xs:w-[calc(100vw-50px)] lg:w-[calc(100vw-100px)] z-20">
          <Link href="/" onClick={() => toggleNavbar(false)} ><img src="/logo_simple.png" className="w-12"></img></Link>

          <ul className="xs:hidden lg:flex items-center gap-14 text-xl font-ethnocentric">
            <li>
              <Link href="/infoptn" className="hover:underline underline-offset-[5px]">Info PTN</Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline underline-offset-[5px]">About Us</Link>
            </li>
          </ul>

          <GiHamburgerMenu className={`self-center text-4xl lg:hidden ${navbar ? 'hidden' : 'block'}`} onClick={() => toggleNavbar(!navbar)}/>
          <BsFillTriangleFill className={`self-center text-2xl rotate-180 lg:hidden ${navbar ? 'block' : 'hidden'}`} onClick={() => toggleNavbar(!navbar)}/>
      </div>
      <div className={`fixed inset-0 h-screen bg-black/50 z-10 xs:${navbar ? 'block' : 'hidden'} lg:hidden`} id="wrapper" onClick={handleClose}>
        <div className="fixed top-20 left-[2.5rem] bg-gray-200/95 backdrop-blur-lg w-[calc(100vw-80px)] shadow-lg shadow-white/25 rounded-xl z-10">
          <ul className="flex flex-col gap-4 text-xl font-ethnocentric pt-10 pb-6 px-6">
            <li>
              <Link href="/infoptn" onClick={() => toggleNavbar(false)}>Info PTN</Link>
            </li>
            <hr className="h-px w-[calc(100vw-135px)] bg-gray-400 border-0"></hr>
            <li>
              <Link href="/about" onClick={() => toggleNavbar(false)}>About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}