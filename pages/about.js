import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

export default function About() {
    SwiperCore.use([Autoplay]);
    return (
        <div className="bg-[url('/about/bg.png')] bg-cover py-32">
            <Swiper slidesPerView={1} loop={true} autoplay={{delay: 5000}} modules={{Autoplay}} className="mySwiper">
                <SwiperSlide>
                    <img src="/about/carousel1.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/about/carousel2.png"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/about/carousel3.png"></img>
                </SwiperSlide>
            </Swiper>

            <div className="grid pt-10 px-10 gap-16">
                <div className="bg-gray-300/50 backdrop-blur-lg justify-center grid grid-cols-2 rounded-[3rem] px-12 py-12">
                    <div className="self-center">
                        <h1 className="bg-gradient-to-b from-white to-gray-500 inline-block text-transparent bg-clip-text font-ethnocentric text-7xl drop-shadow-lg">About Us</h1>
                        <p className="text-white font-poppins pt-8 text-2xl">
                            Kedubes Expo 2023 atau biasa disingkat KEPO adalah acara tahunan yang menjadi sarana pemberian informasi kepada siswa/i SMAN 12 Jakarta terkait berbagai program studi di perguruan tinggi. Kedubes Expo 2023 bertujuan memudahkan dalam menentukan pilihan masa depan untuk ke jenjang berikutnya dan diselenggarakan oleh Alumni SMAN 12 Jakarta.
                        </p>
                        <img src="/about/line1.png" className="pt-6"></img>
                    </div>
                    <div className="justify-self-end">
                        <img src="/about/aboutus.png" className="w-[30vw]"></img>
                    </div>
                </div>

                <div className="bg-gray-300/50 backdrop-blur-lg justify-center grid grid-cols-2 rounded-[3rem] px-12 py-12">
                    <div className="self-center">
                        <img src="/about/ourtheme.png" className="w-[40vw]"></img>
                    </div>
                    <div className="self-center">
                        <h1 className="bg-gradient-to-b from-white to-gray-500 inline-block text-transparent bg-clip-text font-ethnocentric text-7xl drop-shadow-lg">Our Theme</h1>
                        <p className="text-white font-poppins pt-8 text-2xl">
                            Kedubes Expo tahun ini mengusung tema &quot;to the infinity and beyond&quot; yang diangkat dari film berjudul &quot;Lightyear&quot;. Tema tersebut menggambarkan KEPO 2023 sebagai sebuah sarana yang akan membantu siswa/i SMAN 12 Jakarta untuk mengetahui gambaran mengenai tujuan baru yang akan mereka capai yaitu dunia perkuliahan.
                        </p>
                        <img src="/about/line2.png" className="pt-6"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}