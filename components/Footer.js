import {FaTiktok, FaInstagram} from "react-icons/fa"
import Link from "next/link"
import {Inter} from "@next/font/google"

const inter = Inter()

export default function Footer() {
    return (
        <div className={inter.className}>
            <div className="bg-[#000627] h-20 text-white px-8 xs:hidden lg:grid grid-cols-3 justify-between items-center">
                <div>
                    © 2022 <br></br>
                    Kedubes Expo 2023
                </div>

                <div className="flex justify-center">
                    <Link href="/">
                        <img src="/logo_simple.png" className="w-14 justify-center"></img>
                    </Link>
                </div>

                <div className="grid justify-items-end gap-1">
                    <p>Find us on social media!</p>
                    <div className="flex gap-2 text-xl">
                        <FaTiktok />
                        <a href="https://www.instagram.com/kepokedubes" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="w-screen bg-gradient-to-t from-[#000627] via-[#000627] fixed bottom-0 flex xs:flex-col sm:flex-row justify-center items-center text-white xs:gap-1 sm:gap-8 lg:hidden pt-24 xs:pb-2 sm:pb-3">
                <div className="flex flex-col">
                    <h1 className="bg-gradient-to-b from-white to-gray-300 inline-block text-transparent bg-clip-text font-ethnocentric text-center text-lg leading-none">TO INFINITY<br></br>AND BEYOND</h1>
                    <p className="text-center text-[10px]">© 2022 Kedubes Expo</p>
                </div>
                <div className="flex justify-center items-center xs:gap-1 sm:gap-2 xs:text-xs sm:text-lg">
                    <div className="flex gap-1">
                        <FaTiktok />
                        <FaInstagram />
                    </div>
                    <p className="text-sm">@kepokedubes</p>
                </div>
            </div>
        </div>
    )
}