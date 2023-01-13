import SwiperCore, {Navigation, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {useRef, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Link from 'next/link';
import Modal from "../components/Modal";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function InfoPTN() {
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);
    const swiperScrollRef = useRef(null);

    const [isSNBT, showSNBT] = useState(false);

    SwiperCore.use([Navigation, Scrollbar]);
    return (
        <div className="flex flex-col bg-[url(/info/bg.png)] p-32">
            <div className="flex bg-gradient-to-r from-[#1C2027] rounded-full px-16 py-4">
                <h2 className="font-ethnocentric text-6xl text-white">Jalur Masuk PTN</h2>
            </div>
            <div className="flex flex-col">
                <div className="py-6">
                    <Swiper 
                        modules={[Navigation, Scrollbar]}
                        spaceBetween={40}
                        slidesPerView={4} 
                        navigation={{
                            enabled: true,
                            prevEl: swiperNavPrevRef.current,
                            nextEl: swiperNavNextRef.current,
                        }}
                        scrollbar={{
                            enabled: true,
                            draggable: true,
                            el: swiperScrollRef.current,
                            dragClass: 'drag',
                        }}
                        className="rounded-3xl"
                        >
                        <SwiperSlide>
                            <div>
                                <div className="bg-white rounded-3xl flex items-center aspect-square group">
                                    <img src="/info/snbp.png" className="w-full h-full object-contain object-center group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-black h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => showSNBT(true)}>SNBP</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/snbt.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-black h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer">SNBT</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/ui.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-black h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer">SIMAK<br />UI</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/itb.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-black h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer">SM<br />ITB</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/ugm.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-black h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer">UTUL UGM</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/unpad.png" className="w-full h-full object-contain object-center group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-black h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer">SMUP UNPAD</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="group bg-white rounded-3xl flex items-center aspect-square">
                                    <img src="/info/undip.png" className="w-full h-full object-contain object-center p-8 group-hover:opacity-50"></img>
                                    <div className="bg-gradient-to-t from-black h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer">UM UNDIP</div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div ref={swiperNavPrevRef} className="bg-gradient-to-r from-neutral-900 absolute top-0 text-white text-5xl flex justify-center items-center h-full z-10 right-auto cursor-pointer">
                            <IoIosArrowBack></IoIosArrowBack>
                        </div>
                        <div ref={swiperNavNextRef} className="bg-gradient-to-l from-neutral-900 absolute top-0 text-white text-5xl flex justify-center items-center h-full z-10 right-0 left-auto cursor-pointer">
                            <IoIosArrowForward></IoIosArrowForward>
                        </div>
                    </Swiper>
                </div>
                <div ref={swiperScrollRef} className="bg-[#375290] h-2 w-[30vw] my-2 rounded self-center swiper-scrollbar-horizontal">
                    <div className="bg-white h-2 w-10 rounded drag"></div>
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
            <Modal visibility={isSNBT} onClose={() => showSNBT(false)}>
                <div className="flex flex-col gap-8">
                    <div className="flex justify-center items-center gap-8 w-1/4 mx-12">
                        <div className="bg-white rounded-3xl flex items-center aspect-square">
                            <img src="/info/snbp.png" className="object-contain object-center"></img>
                        </div>
                        <h1 className="font-ethnocentric text-4xl">SNBP</h1>
                    </div>
                    <hr className="border-2"/>
                    <div className="font-poppins mx-12">
                        <h1 className="font-bold text-xl">Pengertian</h1>
                        <p className="text-lg">
                            SNBP atau Seleksi Nasional Berdasarkan Prestasi adalah salah satu seleksi bersama penerimaan mahasiswa baru yang penilaiannya berdasarkan nilai rapor dan prestasi siswa. SNBP dikenal sebelumnya dengan Seleksi Nasional Masuk Perguruan Tinggi Negeri atau &#40;SNMPTN&#41;. 
                        </p>
                    </div>
                </div>
            </Modal>
        </div>
    )
}