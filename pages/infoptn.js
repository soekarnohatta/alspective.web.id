import SwiperCore, {Navigation, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {useEffect, useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import Link from 'next/link';
import Modal from "../components/Modal";
import PTNSlide from '../components/PTNSlide';

import "swiper/css";
import 'swiper/css/navigation';

export default function InfoPTN() {
    const [slideNum, changeSlideNum] = useState(0);
    const [isModalVisible, showModal] = useState(false);

    useEffect(() => {
        if(isModalVisible) {
            document.querySelector("body").classList.add("overflowHidden");
        } else {
            document.querySelector("body").classList.remove("overflowHidden");
        }
    })

    SwiperCore.use([Navigation, Scrollbar]);
    return (
        <div className="flex flex-col bg-[url(/info/bg.png)] xs:py-32 lg:p-32">
            <div className="xs:hidden lg:flex bg-gradient-to-r from-[#1C2027] rounded-full px-16 py-4">
                <h2 className="font-ethnocentric text-6xl text-white">Jalur Masuk PTN</h2>
            </div>
            <div className="flex flex-col xs:bg-[#1C2027] lg:bg-transparent xs:p-8 xs:w-screen lg:w-full">
                <h2 className="lg:hidden font-ethnocentric text-[6vw] text-white text-center">Jalur Masuk PTN</h2>
                <div className="py-6">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={2}
                        breakpoints={{
                            1024: {
                                spaceBetween: 80,
                                slidesPerView: 4,
                            }
                        }}
                        navigation={{
                            prevEl: ".nav-prev",
                            nextEl: ".nav-next",
                        }}
                        scrollbar={{
                            draggable: true,
                            el: ".scrollbar-body",
                            dragClass: 'drag',
                        }}
                        modules={[Navigation, Scrollbar]}
                        className="rounded-3xl"
                    >
                        <SwiperSlide>
                            <div>
                                <PTNSlide name="SNBP" logo="/info/snbp.png" slideNumber={0} changeSlideNum={changeSlideNum} showModal={showModal}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <PTNSlide name="SNBT" logo="/info/snbt.png" slideNumber={1} changeSlideNum={changeSlideNum} showModal={showModal} imgClassName="xs:p-3 lg:p-8"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <PTNSlide name="SIMAK UI" logo="/info/ui.png" slideNumber={2} changeSlideNum={changeSlideNum} showModal={showModal} imgClassName="xs:p-3 lg:p-8"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                            <PTNSlide name="SM ITB" logo="/info/itb.png" slideNumber={3} changeSlideNum={changeSlideNum} showModal={showModal} imgClassName="xs:p-3 lg:p-8"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <PTNSlide name="UTUL UGM" logo="/info/ugm.png" slideNumber={4} changeSlideNum={changeSlideNum} showModal={showModal} imgClassName="xs:p-3 lg:p-8"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <PTNSlide name="SMUP UNPAD" logo="/info/unpad.png" slideNumber={5} changeSlideNum={changeSlideNum} showModal={showModal} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <PTNSlide name="UM UNDIP" logo="/info/undip.png" slideNumber={6} changeSlideNum={changeSlideNum} showModal={showModal} imgClassName="xs:p-3 lg:p-8"/>
                            </div>
                        </SwiperSlide>
                        <div className="nav-prev bg-gradient-to-r from-neutral-600 absolute top-0 text-white text-5xl xs:hidden lg:flex justify-center items-center h-full z-10 right-auto cursor-pointer">
                            <IoIosArrowBack></IoIosArrowBack>
                        </div>
                        <div className="nav-next bg-gradient-to-l from-neutral-600 absolute top-0 text-white text-5xl xs:hidden lg:flex justify-center items-center h-full z-10 right-0 left-auto cursor-pointer">
                            <IoIosArrowForward></IoIosArrowForward>
                        </div>
                    </Swiper>
                </div>
                <div className="bg-[#375290] h-2 xs:w-[50vw] lg:w-[30vw] my-2 xs:rounded-xl lg:rounded self-center scrollbar-body">
                    <div className="bg-white h-2 xs:rounded-xl lg:rounded drag"></div>
                </div>
            </div>
            <div className="bg-[#1C2027] xs:p-10 lg:p-16 text-white my-8 lg:rounded-[3rem] lg:grid lg:grid-cols-2">
                <div className="flex flex-col xs:gap-10 lg:gap-4 justify-center">
                    <h1 className="font-ethnocentric xs:text-[7vw] xs:text-center lg:text-left lg:text-5xl">Track Record</h1>
                    <img src="/info/record.png" className="self-center w-[18rem] lg:hidden"></img>
                    <p className="font-poppins text-xl leading-relaxed">
                        Track Record berisi data keberhasilan alumni SMAN 12 Jakarta dalam rentang waktu 2 tahun terakhir. Hal tersebut dapat kamu jadikan gambaran, motivasi, ataupun strategi dalam perjalanan ini. Silakan dibaca pada dokumen dapat kamu lihat di bawah ini!
                    </p>
                    <div className="bg-white flex justify-center items-center w-[18rem] h-[3rem] rounded-full lg:mt-6 xs:self-center lg:self-start">
                        <a href="https://drive.google.com/drive/folders/1gjK8pISkeiEf6iykLx2RrdwNp0cq5QT-" target="_blank" rel="noreferrer" className="text-black font-poppins font-bold text-xl">Lihat Track Record</a>
                    </div>
                </div>
                <div className="justify-self-end xs:hidden lg:block">
                    <img src="/info/record.png" className="w-[32vw] pl-8"></img>
                </div>
            </div>
            <div className="bg-[#1C2027] xs:p-10 lg:p-16 text-white mt-8 lg:rounded-[3rem] lg:grid lg:grid-cols-2">
                <div className="xs:hidden lg:block">
                    <img src="/info/booklet.png" className="w-[32vw] pr-8"></img>
                </div>
                <div className="flex flex-col xs:gap-10 lg:gap-4 justify-center">
                    <h1 className="font-ethnocentric xs:text-[5.7vw] xs:text-center lg:text-left lg:text-5xl">Booklet Jurusan</h1>
                    <img src="/info/booklet.png" className="self-center w-[24rem] lg:hidden"></img>
                    <p className="font-poppins text-xl leading-relaxed">
                        Booklet jurusan berisi detail-detail dari semua jurusan yang kamu tuju. Mulai dari kampus, mata kuliah hingga prospek kerja. Hal ini dapat kalian jadikan motivasi dan juga persiapan sebelum memulai perjalanan di dunia perkuliahan nanti.
                    </p>
                    <div className="bg-white flex justify-center items-center w-[18rem] h-[3rem] rounded-full lg:mt-6 xs:self-center lg:self-start">
                        <a href="https://drive.google.com/drive/folders/1a4NNW-yKGbIpz0gnpfdpJleGQKyZeQ20?usp=sharing" target="_blank" rel="noreferrer"  className="text-black font-poppins font-bold text-xl">Download Booklet</a>
                    </div>
                </div>
            </div>
            <Modal visibility={isModalVisible} slideNum={slideNum} onClose={() => showModal(false)}/>
        </div>
    )
}