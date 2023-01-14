import SwiperCore, {Navigation, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Link from 'next/link';
import Modal from "../components/Modal";

import "swiper/css";
import 'swiper/css/navigation';

export default function InfoPTN() {
    const [slideNum, changeSlideNum] = useState(0);

    const [isModalVisible, showModal] = useState(false);

    SwiperCore.use([Navigation, Scrollbar]);
    return (
        <div className="flex flex-col bg-[url(/info/bg.png)] p-32">
            <div className="flex bg-gradient-to-r from-[#1C2027] rounded-full px-16 py-4">
                <h2 className="font-ethnocentric text-6xl text-white">Jalur Masuk PTN</h2>
            </div>
            <div className="flex flex-col">
                <div className="py-6">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={4}
                        simulateTouch={false}
                        navigation={{
                            enabled: true,
                            prevEl: ".nav-prev",
                            nextEl: ".nav-next",
                        }}
                        scrollbar={{
                            enabled: true,
                            draggable: true,
                            el: ".scrollbar-body",
                            dragClass: 'drag',
                        }}
                        modules={[Navigation, Scrollbar]}
                        className="rounded-3xl"
                    >
                        <SwiperSlide>
                            <div>
                                <div className="bg-white rounded-3xl flex items-center aspect-square group">
                                    <img src="/info/snbp.png" className="w-full h-full object-contain object-center group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-neutral-800 h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => {changeSlideNum(0);showModal(true);
                                    }}>SNBP</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/snbt.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-neutral-800 h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => {changeSlideNum(1);showModal(true);}}>SNBT</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/ui.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-neutral-800 h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => {changeSlideNum(2);showModal(true);}}>SIMAK<br />UI</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/itb.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-neutral-800 h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => {changeSlideNum(3);showModal(true);}}>SM<br />ITB</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/ugm.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-neutral-800 h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => {changeSlideNum(4);showModal(true);}}>UTUL UGM</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/unpad.png" className="w-full h-full object-contain object-center group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-neutral-800 h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => {changeSlideNum(5);showModal(true);}}>SMUP UNPAD</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/undip.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-neutral-800 h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => {changeSlideNum(6);showModal(true);}}>UM UNDIP</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="nav-prev bg-gradient-to-r from-neutral-600 absolute top-0 text-white text-5xl flex justify-center items-center h-full z-10 right-auto cursor-pointer">
                            <IoIosArrowBack></IoIosArrowBack>
                        </div>
                        <div className="nav-next bg-gradient-to-l from-neutral-600 absolute top-0 text-white text-5xl flex justify-center items-center h-full z-10 right-0 left-auto cursor-pointer">
                            <IoIosArrowForward></IoIosArrowForward>
                        </div>
                    </Swiper>
                </div>
                <div className="bg-[#375290] h-2 w-[30vw] my-2 rounded self-center scrollbar-body">
                    <div className="bg-white h-2 rounded drag"></div>
                </div>
            </div>
            <div className="bg-[#1C2027] p-16 text-white my-8 rounded-[3rem] grid grid-cols-2">
                <div className="flex flex-col gap-4 justify-center">
                    <h1 className="font-ethnocentric text-5xl">Track Record</h1>
                    <p className="font-poppins text-xl leading-relaxed">
                        Track Record berisi data keberhasilan alumni SMAN 12 Jakarta dalam rentang waktu 2 tahun terakhir. Hal tersebut dapat kamu jadikan gambaran, motivasi, ataupun strategi dalam perjalanan ini. Silakan dibaca pada dokumen dapat kamu lihat di bawah ini!
                    </p>
                    <div className="bg-white flex justify-center items-center w-[18rem] h-[3rem] rounded-full mt-6">
                        <Link href="#" className="text-black font-poppins font-bold text-xl">Lihat Track Record</Link>
                    </div>
                </div>
                <div className="justify-self-end">
                    <img src="/info/record.png" className="h-[20rem]"></img>
                </div>
            </div>
            <div className="bg-[#1C2027] p-16 text-white mt-8 rounded-[3rem] grid grid-cols-2">
                <div>
                    <img src="/info/booklet.png" className="h-[20rem]"></img>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                    <h1 className="font-ethnocentric text-5xl">Booklet Jurusan</h1>
                    <p className="font-poppins text-xl leading-relaxed">
                        Booklet jurusan berisi detail-detail dari semua jurusan yang kamu tuju. Mulai dari kampus, mata kuliah hingga prospek kerja. Hal ini dapat kalian jadikan motivasi dan juga persiapan sebelum memulai perjalanan di dunia perkuliahan nanti.
                    </p>
                    <div className="bg-white flex justify-center items-center w-[18rem] h-[3rem] rounded-full mt-6">
                        <Link href="#" className="text-black font-poppins font-bold text-xl">Download Booklet</Link>
                    </div>
                </div>
            </div>
            <Modal visibility={isModalVisible} slideNum={slideNum} onClose={() => showModal(false)} />
        </div>
    )
}