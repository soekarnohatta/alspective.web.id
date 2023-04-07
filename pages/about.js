import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

export default function About() {
    SwiperCore.use([Autoplay]);
    return (
        <div className="bg-[url('/about/bg.png')] bg-cover bg-center py-32">
            <Swiper slidesPerView={1} loop={true} autoplay={{delay: 4000}} modules={{Autoplay}} className="mySwiper xs:hidden lg:block">
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

            <div className="grid lg:pt-10 lg:px-10 gap-16">
                <div className="bg-[#1C2027] justify-center lg:grid lg:grid-cols-2 lg:rounded-[3rem] px-10 py-10">
                    <div className="xs:flex xs:flex-col xs:items-center xs:gap-4 lg:block lg:self-center">
                        <h1 className="bg-gradient-to-b from-white to-gray-300 inline-block text-transparent bg-clip-text font-ethnocentric xs:text-4xl lg:text-7xl drop-shadow-lg">About Us</h1>
                        <img src="/about/aboutus.png" className="lg:w-[30vw] lg:hidden"></img>
                        <p className="text-white font-poppins xs:pt-4 lg:pt-8 xs:text-xl lg:text-2xl">
							OSIS SMA Islam Al Azhar 19 Ciracas ingin
							mengembangkan potensi siswa/i dari dalam sekolah maupun siswa/i dengan kegiatan
							bernama ALSPECTIVE. Alspective merupakan kompetisi yang meliputi berbagai ajang dan juga pentas
							seni. Kegiatan ALSPECTIVE 3.0 (Al Azhar Space of Creativity) akan dilaksanakan pada tanggal 3 Mei -14 Mei 2023. 
                        </p>
                        <img src="/about/line1.png" className="pt-6 xs:hidden lg:block"></img>
                    </div>
                    <div className="justify-self-end xs:hidden lg:block">
                        <img src="/about/aboutus.png" className="w-[30vw]"></img>
                    </div>
                </div>

                <div className="bg-[#1C2027] justify-center lg:grid lg:grid-cols-2 lg:rounded-[3rem] px-10 py-10">
                    <div className="xs:justify-self-end lg:justify-self-start xs:hidden lg:block lg:self-center">
                        <img src="/about/ourtheme.png" className="w-[35vw]"></img>
                    </div>
                    <div className="xs:flex xs:flex-col xs:items-center xs:gap-4 lg:block lg:self-center">
                        <h1 className="bg-gradient-to-b from-white to-gray-300 inline-block text-transparent bg-clip-text font-ethnocentric xs:text-4xl lg:text-7xl drop-shadow-lg">Our Theme</h1>
                        <img src="/about/ourtheme.png" className="w-[80vw] lg:hidden"></img>
                        <p className="text-white font-poppins xs:pt-4 lg:pt-8 xs:text-xl lg:text-2xl">
							Acara ini bertemakan “Step Right Up To Be A Star”. Acara ini dilaksanakan secara offline yang
							bertempat di SMA Islam Al-Azhar 19 Ciracas. Kegiatan ini bertujuan untuk mendorong kreativitas yang ada didalam diri kita.
                        </p>
                        <img src="/about/line2.png" className="pt-6 xs:hidden lg:block"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}