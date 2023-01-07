import {FaTiktok, FaInstagram} from "react-icons/fa"

export default function Footer() {
    return (
      <div className="bg-[#000627] h-20 text-white px-8 grid grid-cols-3 justify-between items-center">
        <div>
            ©2022 <br></br>
            Kedubes Expo 2023
        </div>

        <div className="flex justify-center">
            <img src="/logo-plain.png" className="w-14 justify-center"></img>
        </div>

        <div className="grid justify-items-end gap-1">
            <p>Find us on social media!</p>
            <div className="flex gap-2 text-xl">
                <FaTiktok />
                <FaInstagram />
            </div>
        </div>
      </div>
    )
}