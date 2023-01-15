import {useState} from "react";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import {ImCross} from "react-icons/im";

import "swiper/css";
import 'swiper/css/navigation';

export default function Modal({visibility, slideNum, onClose}) {
    const [swiper, setSwiper] = useState(null);

    if (!visibility) return null;

    const prev= () => {
        swiper.slidePrev();
    }

    const next= () => {
        swiper.slideNext();
    }

    const handleClose = (e) => {
        console.log(e.target.id, e.target.className)
        if (e.target.id === "wrapper") onClose();
    }

    SwiperCore.use([Navigation]);
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 text-white !overflow-y-initial">
            <div className="lg:flex lg:items-center w-full xs:h-auto lg:h-screen xs:max-h-full lg:max-h-max overflow-x-hidden overflow-y-auto" id="wrapper" onClick={handleClose}>
                <Swiper 
                    slidesPerGroup={1}
                    autoHeight={true}
                    rewind={true}
                    navigation={{
                        enabled: true,
                        prevEl: ".modal-nav-prev",
                        nextEl: ".modal-nav-next",
                    }}
                    modules={[Navigation]} 
                    initialSlide={slideNum}
                    onSwiper={(s) => setSwiper(s)}
                    className="xs:!mt-[14vh] lg:!mt-0 lg:!mx-24"
                >
                    <SwiperSlide>
                        <div className="bg-[#1C2027] xs:mb-16 lg:mb-0 xs:p-4 lg:pt-12 lg:px-12 rounded-3xl">
                            <div className="flex flex-col xs:gap-2 lg:gap-8">
                                <div className="xs:grid lg:hidden px-2 grid-cols-2 font-poppins font-bold">
                                    <h1>Jalur Masuk PTN</h1>
                                    <ImCross onClick={() => onClose()} className="justify-self-end self-center text-sm" />
                                </div>
                                <hr className="border-1 lg:hidden"/>
                                <div className="flex lg:justify-center items-center lg:self-start gap-8 xs:pt-4 lg:pt-0 xs:mx-2 lg:mx-12">
                                    <div className="bg-white xs:rounded-xl lg:rounded-3xl flex items-center aspect-square xs:w-[30vw] lg:w-[12rem]">
                                        <img src="/info/snbp.png" className="object-contain object-center"></img>
                                    </div>
                                    <h1 className="font-ethnocentric xs:text-2xl lg:text-4xl">SNBP</h1>
                                </div>
                                <hr className="border-2 xs:hidden lg:block"/>
                                <div className="font-poppins xs:px-4 lg:px-10 lg:mx-2 xs:py-4 lg:py-0 lg:pb-4 flex flex-col gap-8 lg:h-[40vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Pengertian</h1>
                                        <p className="lg:text-lg leading-relaxed">
                                            SNBP atau Seleksi Nasional Berdasarkan Prestasi adalah salah satu seleksi bersama penerimaan mahasiswa baru yang penilaiannya berdasarkan nilai rapor dan prestasi siswa. SNBP dikenal sebelumnya dengan Seleksi Nasional Masuk Perguruan Tinggi Negeri atau (SNMPTN).
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Bentuk Seleksi</h1>
                                        <p className="lg:text-lg leading-relaxed">
                                            Seleksi SNBP dilakukan berdasarkan prestasi siswa. Prestasi yang dimaksud bisa berupa nilai atau prestasi akademik dan/atau prestasti nonakademik seperti perlombaan dan organisasi.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Berkas atau dokumen yang diperlukan</h1>
                                        <p className="lg:text-lg leading-relaxed">
                                            Dokumen yang dibutuhkan untuk pendaftaran SNBP adalah rapor semester 1-5 dan juga sertifikat lomba atau kejuaraan sebagai dokumen penunjang yang bisa menjadi nilai plus dalam penilaian. Selain itu untuk beberapa jurusan seperti Olahraga, Seni Rupa, Desain, dan Musik memerlukan portofolio sebagai salah satu syarat pendaftaran. 
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#1C2027] xs:mb-16 lg:mb-0 xs:p-4 lg:pt-12 lg:px-12 rounded-3xl">
                            <div className="flex flex-col xs:gap-2 lg:gap-8">
                                <div className="xs:grid lg:hidden px-2 grid-cols-2 font-poppins font-bold">
                                    <h1>Jalur Masuk PTN</h1>
                                    <ImCross onClick={() => onClose()} className="justify-self-end self-center text-sm" /> 
                                </div>
                                <hr className="border-1 lg:hidden"/>
                                <div className="flex lg:justify-center items-center lg:self-start gap-8 xs:pt-4 lg:pt-0 xs:mx-2 lg:mx-12">
                                    <div className="bg-white xs:rounded-xl lg:rounded-3xl flex items-center aspect-square xs:w-[30vw] lg:w-[12rem]">
                                        <img src="/info/snbt.png" className="object-contain object-center p-3"></img>
                                    </div>
                                    <h1 className="font-ethnocentric xs:text-2xl lg:text-4xl">SNBT</h1>
                                </div>
                                <hr className="border-2 xs:hidden lg:block"/>
                                <div className="font-poppins xs:px-4 lg:px-10 lg:mx-2 xs:py-4 lg:py-0 flex flex-col gap-8 lg:h-[40vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Apa itu SNBT?</h1>
                                        <p className="lg:text-lg leading-relaxed">
                                            Seleksi Nasional Berdasarkan Tes atau yang biasa disingkat SNBT,  merupakan salah satu jalur seleksi masuk perguruan tinggi negeri tahun 2023 yang diadakan di bawah lembaga SNPMB BPPP Kemdikbud 2023. Proses seleksi ini sebelumnya dikenal dengan sebutan SBMPTN. SNBT merupakan seleksi yang dilakukan berdasarkan hasil nilai Tes Skolastik berbasis komputer.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Hal apa yang perlu disiapkan untuk SNBT?</h1>
                                        <div className="lg:text-lg leading-relaxed xs:px-4 lg:px-12">
                                            <ol className="list-decimal">
                                                <li className="pb-4">
                                                    <h1>Dokumen</h1>
                                                    <p>Saat akan melakukan SNBT, ada beberapa dokumen yang wajib dibawa oleh peserta, yaitu sebagai berikut:</p>
                                                    <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                                        <li>kartu peserta SNBT</li>
                                                        <li>kartu identitas (kartu pelajar/KTP/paspor)</li>
                                                        <li>surat keterangan lulus asli (bagi peserta angkatan 2023)</li>
                                                        <li>fotokopi ijazah yang telah dilegalisasi (bagi angkatan 2021 dan 2022)</li>
                                                    </ul>
                                                </li>
                                                <li className="pb-4">
                                                    <h1>Akun SNPMB</h1>
                                                    <p>
                                                        Siswa kelas XII wajib melakukan registrasi Akun SNPMB untuk mengikuti SNBT 2023. Pembuatan akun SNPMB dapat dilakukan pada 16 Februari - 3 Maret 2023. Hal yang perlu dipersiapkan untuk membuat akun SNPMB:</p>
                                                    <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                                        <li>NISN</li>
                                                        <li>NPSN</li>
                                                        <li>Tanggal lahir</li>
                                                        <li>Email aktif</li>
                                                        <li>NIK dari KTP/KK</li>
                                                        <li>Pas foto terbaru</li>
                                                    </ul>
                                                </li>
                                                <li className="pb-4">
                                                    <h1>Akun SNBT</h1>
                                                    <p>
                                                        Pendaftaran akun SNBT dapat dilakukan pada 23 Maret - 14 April 2023. Hal yang perlu dipersiapkan untuk melakukan pendaftaran akun SNBT:
                                                    </p>
                                                    <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                                        <li>NISN aktif</li>
                                                        <li>NPSN</li>
                                                        <li>Email aktif</li>
                                                        <li>Sandi akun</li>
                                                    </ul>
                                                </li>
                                                <li className="pb-4">
                                                    <h1>Surat Keterangan Siswa SMA/MA/SMK Kelas XII</h1>
                                                    <p>
                                                        Siswa SMA/MA/SMK/sederajat calon lulusan tahun 2023 harus memiliki Surat Keterangan Siswa SMA/MA/SMK Kelas 12 atau peserta didik Paket C tahun 2023 dengan umur maksimal 25 tahun (per 1 Juli 2023). Surat keterangan Siswa Kelas XII disertai dengan:
                                                    </p>
                                                    <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                                        <li>foto terbaru (berwarna)</li>
                                                        <li>stempel/cap sekolah</li>
                                                        <li>tanda tangan Kepala Sekolah</li>
                                                    </ul>
                                                </li>
                                                <li className="pb-4">
                                                    <h1>Portofolio</h1>
                                                    <p>
                                                        Menurut laman resmi SNPMB, portofolio merupakan dokumentasi kumpulan karya dan atau penampilan (performance) siswa dalam bidang Seni atau Olahraga. Portofolio berisi kombinasi antara dokumentasi karya atau penampilan yang khusus dibuat oleh peserta sesuai dengan instruksi untuk setiap bidang, dan dokumentasi karya atau penampilan yang dimiliki atau dibuat oleh peserta semasa mengikuti pendidikan menengah. Portofolio wajib untuk peserta yang memilih program studi Bidang Seni dan Olahraga. Terdapat 10 jenis portofolio, yaitu:
                                                    </p>
                                                    <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                                        <li>Olahraga;</li>
                                                        <li>Seni Rupa, Desain, dan Kriya;</li>
                                                        <li>Tari (termasuk Sendratasik/Seni Pertunjukan opsi Tari);</li>
                                                        <li>Teater (termasuk Sendratasik/Seni Pertunjukan opsi Teater/Drama);</li>
                                                        <li>Musik (termasuk Sendratasik/Seni Pertunjukan opsi Musik);</li>
                                                        <li>Seni Karawitan;</li>
                                                        <li>Etnomusikologi;</li>
                                                        <li>Fotografi;</li>
                                                        <li>Film dan Televisi;</li>
                                                        <li>Seni Pedalangan.</li>
                                                    </ul>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#1C2027] xs:mb-16 lg:mb-0 xs:p-4 lg:pt-12 lg:px-12 rounded-3xl">
                            <div className="flex flex-col xs:gap-2 lg:gap-8">
                                <div className="xs:grid lg:hidden px-2 grid-cols-2 font-poppins font-bold">
                                    <h1>Jalur Masuk PTN</h1>
                                    <ImCross onClick={() => onClose()} className="justify-self-end self-center text-sm" /> 
                                </div>
                                <hr className="border-1 lg:hidden"/>
                                <div className="flex lg:justify-center items-center lg:self-start gap-8 xs:pt-4 lg:pt-0 xs:mx-2 lg:mx-12">
                                    <div className="bg-white xs:rounded-xl lg:rounded-3xl flex items-center aspect-square xs:w-[30vw] lg:w-[12rem]">
                                        <img src="/info/ui.png" className="object-contain object-center p-3"></img>
                                    </div>
                                    <h1 className="font-ethnocentric xs:text-2xl lg:text-4xl">SIMAK UI</h1>
                                </div>
                                <hr className="border-2 xs:hidden lg:block"/>
                                <div className="font-poppins xs:px-4 lg:px-10 lg:mx-2 xs:py-4 lg:py-0 lg:pb-4 flex flex-col gap-8 lg:h-[40vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Pengertian</h1>
                                        <p className="lg:text-lg leading-relaxed">
                                            Simak-UI (Seleksi Masuk UI) adalah ujian seleksi terpadu masuk UI yang diselenggarakan UI bagi calon mahasiswa yang ingin kuliah di UI. Program pendidikan yang dibuka pada SIMAK UI mulai dari Program Vokasi (D3 dan D4), Sarjana Reguler, Sarjana Kelas Paralel, Sarjana Ekstensi/Paralel untuk lulusan D3, Profesi, Spesialis, Magister dan Doktor. Sedangkan ujian SIMAK Sarjana Kelas Internasional diselenggarakan pada waktu yang berbeda.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Bentuk Ujian</h1>
                                        <p className="lg:text-lg leading-relaxed">Materi Ujian SIMAK UI S1 Paralel dan Vokasi (D3) pada 2023 terdiri dari:</p>
                                        <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Kemampuan Dasar (KD): Matematika Dasar, Bahasa Indonesia, dan Bahasa Inggris.</li>
                                            <li>Kemampuan IPA (KA): Matematika IPA, Fisika, Kimia, Biologi.</li>
                                            <li>Kemampuan IPS (KS): Ekonomi, Sejarah, Geografi, Sosiologi.</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Berkas Yang Harus Dipersiapkan</h1>
                                        <ol className="list-decimal list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Telah lulus dari SMA/SMK/MA/sederajat.</li>
                                            <li>Memiliki ijazah/A Level/IB Diploma/surat penyetaraan dari Departemen Pendidikan Nasional.</li>
                                            <li>Bagi peserta SIMAK UI S1 Reguler, wajib mengikuti dan memiliki skor UTBK 2023 sesuai dengan program studi yang dipilih.</li>
                                            <li>Memiliki kesehatan yang memadai sehingga tidak mengganggu proses pembelajaran pada program studi yang dipilih.</li>
                                            <li>Bagi peserta SIMAK UI S1 Kelas Internasional, wajib memiliki sertifikat TOEFL/IELTS. Jenis TOEFL yang diakui adalah yang disertifikasi ETS (ITP skor min.500 atau iBT skor minimum 61 atau CBT skor minimum 173) atau IELTS dengan skor minimum 5.5.</li>
                                        </ol>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#1C2027] xs:mb-16 lg:mb-0 xs:p-4 lg:pt-12 lg:px-12 rounded-3xl">
                            <div className="flex flex-col xs:gap-2 lg:gap-8">
                                <div className="xs:grid lg:hidden px-2 grid-cols-2 font-poppins font-bold">
                                    <h1>Jalur Masuk PTN</h1>
                                    <ImCross onClick={() => onClose()} className="justify-self-end self-center text-sm" /> 
                                </div>
                                <hr className="border-1 lg:hidden"/>
                                <div className="flex lg:justify-center items-center lg:self-start gap-8 xs:pt-4 lg:pt-0 xs:mx-2 lg:mx-12">
                                    <div className="bg-white xs:rounded-xl lg:rounded-3xl flex items-center aspect-square xs:w-[30vw] lg:w-[12rem]">
                                        <img src="/info/itb.png" className="object-contain object-center p-3"></img>
                                    </div>
                                    <h1 className="font-ethnocentric xs:text-2xl lg:text-4xl">SM ITB</h1>
                                </div>
                                <hr className="border-2 xs:hidden lg:block"/>
                                <div className="font-poppins xs:px-4 lg:px-10 lg:mx-2 xs:py-4 lg:py-0 lg:pb-4 flex flex-col gap-8 lg:h-[40vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                    <div className="flex flex-col gap-4">
                                        <p className="lg:text-lg leading-relaxed">Jalur Seleksi Mandiri ITB (SM-ITB) memberi kesempatan lebih luas bagi siswa lulusan SMA baik WNI maupun WNA untuk mengikuti pendidikan program sarjana di Institut Teknologi Bandung.</p>
                                        <p className="lg:text-lg leading-relaxed">Dalam proses penerimaan SM-ITB, ITB tetap menggunakan kriteria kemampuan akademik yang tinggi sebagai satu-satunya kriteria. Proses penerimaan mahasiswa baru melalui jalur Seleksi Mandiri ITB (SM-ITB) dilaksanakan dengan menggunakan komponen penilaian sebagai berikut:</p>
                                        <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Hasil UTBK dan nilai rapor bagi pendaftar ke fakultas/sekolah selain FSRD</li>
                                            <li>Hasil UTBK dan nilai rapor, hasil kemampuan seni rupa, bagi pendaftar ke FSRD</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Persyaratan mengikuti Seleksi Mandiri ITB:</h1>
                                        <ol className="list-decimal list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Berasal dari SMA/MA jurusan IPA atau SMA/MA jurusan IPS atau lulusan Paket C jurusan IPA/IPS, dengan tahun ijazah 2020, 2021, atau 2022.</li>
                                            <li>Memiliki NISN (Nomor Induk Siswa Nasional)</li>
                                            <li>Memiliki dan mengunggah nilai rapor SMA/MA/Paket C lengkap, semester 1 s.d semester 6.</li>
                                            <li>Memiliki nilai UTBK 2022</li>
                                            <li>Tidak pernah tercatat sebagai mahasiswa program sarjana ITB.</li>
                                            <li>Tidak diterima sebagai calon mahasiswa ITB melalui jalur seleksi SNMPTN/SBMPTN atau seleksi program Sarjana-Internasional ITB tahun 2022.</li>
                                            <li>Khusus untuk peminat FSRD, wajib mengikuti Tes Kemampuan Seni Rupa secara luring.</li>
                                            <li>Lulusan tahun 2020 dan 2021 dapat mendaftar SM-ITB 2022 dengan syarat memiliki nilai UTBK 2022.</li>
                                            <li>
                                                Tidak buta warna, baik buta warna total maupun buta warna parsial, bagi peminat :
                                                <ol className="list-[lower-alpha] list-inside !leading-loose px-8 lg:text-lg">
                                                    <li>Sekolah Farmasi (SF)</li>
                                                    <li>Sekolah Ilmu dan Rekayasa Hayati (SITH)</li>
                                                    <li>Fakultas Teknik Pertambangan dan Perminyakan (FTTM)</li>
                                                    <li>Fakultas Seni Rupa dan Desain (FSRD)</li>
                                                    <li>Fakultas Teknologi Industri (FTI) - Kampus Jatinangor</li>
                                                    <li>Program Studi Kimia (FMIPA-IPA)</li>
                                                    <li>Program Studi Teknik Geologi (FITB-G)</li>
                                                    <li>Program Studi Teknik Kimia (FTI-G)</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#1C2027] xs:mb-16 lg:mb-0 xs:p-4 lg:pt-12 lg:px-12 rounded-3xl">
                            <div className="flex flex-col xs:gap-2 lg:gap-8">
                                <div className="xs:grid lg:hidden px-2 grid-cols-2 font-poppins font-bold">
                                    <h1>Jalur Masuk PTN</h1>
                                    <ImCross onClick={() => onClose()} className="justify-self-end self-center text-sm" /> 
                                </div>
                                <hr className="border-1 lg:hidden"/>
                                <div className="flex lg:justify-center items-center lg:self-start gap-8 xs:pt-4 lg:pt-0 xs:mx-2 lg:mx-12">
                                    <div className="bg-white xs:rounded-xl lg:rounded-3xl flex items-center aspect-square xs:w-[30vw] lg:w-[12rem]">
                                        <img src="/info/ugm.png" className="object-contain object-center p-3"></img>
                                    </div>
                                    <h1 className="font-ethnocentric xs:text-2xl lg:text-4xl">UTUL UGM</h1>
                                </div>
                                <hr className="border-2 xs:hidden lg:block"/>
                                <div className="font-poppins xs:px-4 lg:px-10 lg:mx-2 xs:py-4 lg:py-0 lg:pb-4 flex flex-col gap-8 lg:h-[40vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Pengertian</h1>
                                        <p className="lg:text-lg leading-relaxed">Utul sendiri ialah singkatan dari Ujian Tulis. Namun, sekarang kita tidak menggunakan kertas dan pensil lagi saat ujian, melainkan komputer. Itulah sebabnya Utul UGM secara resmi disebut sebagai CBT, kependekan dari Computer Based Test.</p>
                                        <p className="lg:text-lg leading-relaxed">Ujian Tulis Universitas Gadjah Mada adalah jalur seleksi mandiri masuk UGM yang menggunakan kombinasi hasil ujian tulis berbasis komputer (UTBK) dan nilai ujian tulis (UTUL). Mahasiswa dapat memilih total tiga program studi pada jenjang Sarjana (S1) serta jenjang Diploma 4 (Sarjana Terapan).</p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Bentuk Ujian</h1>
                                        <p className="lg:text-lg leading-relaxed">Kelompok ujian tulis dibagi menjadi tiga jenis, yaitu kelompok ujian sains dan teknologi (Saintek), kelompok ujian sosial dan humaniora (Soshum) dan kelompok ujian campuran (Saintek dan Soshum). Bentuk ujiannya antara lain: Tes Potensi Akademik (TPA), Tes Kemampuan Dasar Umum (Matematika Dasa, Bahasa Indonesia, dan Bahasa Inggris), dan Tes Kemampuan Saintek (Fisika, Kimia, Biologi, dan Matematika Dasar), dan Soshum (Sosiologi, Ekonomi, Geografi, dan Sejarah).</p>
                                        <p className="lg:text-lg leading-relaxed">Kelompok Saintek</p>
                                        <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Tes Kemampuan Akademik (TKA) Saintek: Fisika, Kimia, Biologi, dan Matematika IPA</li>
                                            <li>Tes Kemampuan Dasar Umum (TKDU) : Matematika Dasar, Bahasa Indonesia, dan Bahasa Inggris</li>
                                            <li>Tes Potensi Akademik (TPA)</li>
                                        </ul>
                                        <p className="lg:text-lg leading-relaxed">Kelompok Soshum</p>
                                        <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Tes Kemampuan Akademik (TKA) Soshum: Sejarah, Geografi, Ekonomi, dan Sosiologi</li>
                                            <li>Tes Kemampuan Dasar Umum (TKDU) : Matematika Dasar, Bahasa Indonesia, dan Bahasa Inggris</li>
                                            <li>Tes Potensi Akademik (TPA)</li>
                                        </ul>
                                        <p className="lg:text-lg leading-relaxed">Kelompok Saintek</p>
                                        <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Tes Kemampuan Akademik (TKA) Saintek: Fisika, Kimia, Biologi, dan Matematika IPA</li>
                                            <li>Tes Kemampuan Akademik (TKA) Soshum: Sejarah, Geografi, Ekonomi, dan Sosiologi</li>
                                            <li>Tes Kemampuan Dasar Umum (TKDU) : Matematika Dasar, Bahasa Indonesia, dan Bahasa Inggris</li>
                                            <li>Tes Potensi Akademik (TPA)</li>
                                        </ul>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Berkas Yang Harus Dipersiapkan</h1>
                                        <p className="lg:text-lg leading-relaxed">Seleksi di jalur CBT-UM UGM didasarkan pada kombinasi antara nilai Computer Based Test Ujian Masuk UGM dan skor UTBK SBMPTN 2022. Selain itu, peserta seleksi dapat memilih maksimal 2 program studi (prodi) S1 atau sarjana terapan di UGM. Seleksi UTUL UGM 2022 bisa diikuti oleh pada lulusan SMA/SMK/MA/Paket C atau sederajat dari tahun 2023, 2022, dan 2021. Berikut detail syarat pendaftaran UTUL UGM dan ketentuan mengikuti ujian di CBT-UM UGM:</p>
                                        <ol className="list-decimal !leading-loose px-8 lg:text-lg">
                                            <li>
                                                <h1 className="font-bold text-lg">Syarat umum di pendaftaran UTUL UGM</h1>
                                                <ul className="list-disc !leading-loose px-8 lg:text-lg">
                                                    <li>Warga Negara Indonesia</li>
                                                    <li>Lulusan SMA/SMK/MA/Paket C/sederajat tahun 2023, 2022, dan 2021</li>
                                                    <li>Punya skor UTBK-SNBT 2023</li>
                                                    <li>Kesehatan memadai sehingga tidak mengganggu kelancaran proses studi.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h1 className="font-bold text-lg">Syarat khusus di pendaftaran UTUL UGM</h1>
                                                <ul className="list-disc !leading-loose px-8 lg:text-lg">
                                                    <li>Lulusan SMA/SMK/MA/Paket C/sederajat Tahun 2022 dan 2021 punya ijazah.</li>
                                                    <li>Lulusan SMA/SMK/MA/Paket C atau sederajat Tahun 2023 minimal harus memiliki Surat Keterangan Lulus (SKL) yang sekurang-kurangnya memuat informasi jati diri beserta foto terbaru yang dibubuhi cap/stempel dari sekolah/lembaga penyelenggara Paket C yang sah.</li>
                                                    <li>Bawa Ijazah (asli atau fotokopi berlegalisir) atau SKL (asli) saat ujian CBT-UM UGM.</li>
                                                    <li>Bawa Kartu Ujian CBT-UM UGM Tahun 2023 saat ujian CBT-UM UGM.</li>
                                                    <li>Bawa Kartu Identitas (KTP/KK) saat ujian CBT-UM UGM.</li>
                                                    <li>Menunjukkan sertifikat vaksin melalui aplikasi peduli lindungi atau membawa kartu vaksin saat ujian CBT-UM UGM.</li>
                                                    <li>Apabila peserta belum vaksin Covid 19, menunjukkan hasil negatif (rapid tes antigen 1x24 jam atau RT-PCR 3x24 jam) saat ujian CBT-UM UGM.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h1 className="font-bold text-lg">Syarat dokumen di pendaftaran UTUL UGM</h1>
                                                <p className="lg:text-lg leading-relaxed">Ada tiga jenis dokumen yang harus diunggah saat melakukan pendaftaran CBT-UM UGM 2022. Ketiga dokumen itu harus diunggah dalam bentuk file PDF, dengan ukuran file minimal 150 Kb dan maksimal 800 Kb.</p>
                                                <p className="lg:text-lg leading-relaxed">Tiga dokumen yang harus diunggah saat pendaftaran online CBT-UM UGM 2022 adalah:</p>
                                                <ol className="list-[lower-alpha] !leading-loose px-8 lg:text-lg">
                                                    <li>Ijazah (lulusan 2023, 2022, dan 2021) atau Surat Keterangan Lulus/SKL (lulusan di Tahun 2023 yang belum memperoleh ijazah)</li>
                                                    <li>Kartu Peserta UTBK-SBMPTN Tahun 2023</li>
                                                    <li>Kartu Tanda Penduduk (KTP) atau Kartu Keluarga (KK).</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#1C2027] xs:mb-16 lg:mb-0 xs:p-4 lg:pt-12 lg:px-12 rounded-3xl">
                            <div className="flex flex-col xs:gap-2 lg:gap-8">
                                <div className="xs:grid lg:hidden px-2 grid-cols-2 font-poppins font-bold">
                                    <h1>Jalur Masuk PTN</h1>
                                    <ImCross onClick={() => onClose()} className="justify-self-end self-center text-sm" /> 
                                </div>
                                <hr className="border-1 lg:hidden"/>
                                <div className="flex lg:justify-center items-center lg:self-start gap-8 xs:pt-4 lg:pt-0 xs:mx-2 lg:mx-12">
                                    <div className="bg-white xs:rounded-xl lg:rounded-3xl flex items-center aspect-square xs:w-[30vw] lg:w-[12rem]">
                                        <img src="/info/unpad.png" className="object-contain object-center"></img>
                                    </div>
                                    <h1 className="font-ethnocentric xs:text-2xl lg:text-4xl">SMUP UNPAD</h1>
                                </div>
                                <hr className="border-2 xs:hidden lg:block"/>
                                <div className="font-poppins xs:px-4 lg:px-10 lg:mx-2 xs:py-4 lg:py-0 lg:pb-4 flex flex-col gap-8 lg:h-[40vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                    <div className="flex flex-col gap-4">
                                        <p className="lg:text-lg leading-relaxed">SMUP Program Sarjana Jalur Mandiri Universitas Padjadjaran (Unpad) mengadopsi sistem seleksi masuk dari pemerintah sesuai dengan Permendikbudristek No. 48 Tahun 2022. SMUP dapat diikuti oleh semua Warga Negara Indonesia (WNI) yang lulus pada pendidikan setingkat Sekolah Menengah Atas di tahun 2021, 2022 dan 2023, dengan tidak harus terdaftar sebelumnya sebagai peserta SNMPTN ataupun SBMPTN.</p>
                                        <p className="lg:text-lg leading-relaxed">Peserta SMUP Program Sarjana Jalur Mandiri dapat mendaftar dengan mengikuti ketentuan sebagai berikut:</p>
                                        <ol className="list-decimal list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Pendaftar harus memiliki nilai SNBT/ UTBK 2023 atau nilai SMUP 2023</li>
                                            <li>
                                                Pendaftar <span className="font-bold">hanya dapat memilih</span> salah satu dari dua skema pendaftaran dan seleksi, yaitu:
                                                <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                                    <li><span className="font-bold">Skema 1</span> : Peserta menggunakan nilai SNBT/ UTBK 2023</li>
                                                    <li><span className="font-bold">Skema 2</span> : Peserta menggunakan nilai SMUP (untuk siswa lulusan tahun 2021, 2022, 2023).</li>
                                                </ul>
                                            </li>
                                            <li>Pendaftar harus memiliki nilai SNBT/ UTBK 2023 atau nilai SMUP 2023</li>
                                            <li>Materi Ujian SMUP berupa Ujian Tes Kemampuan Belajar (<span className="font-bold">TKB</span>) yang sepadan dengan ujian SNBT dan dilakukan secara on-line.</li>
                                            <li>
                                                Pendaftar dapat memilih paling banyak dua program studi dengan ketentuan:
                                                <ul className="list-disc list-inside !leading-loose px-8 lg:text-lg">
                                                    <li>Peserta yang menggunakan nilai SNBT/ UTBK 2023 hanya bisa memilih dua Program Studi di Unpad sesuai dengan pilihan program studi yang ada di kartu ujian SNBT/ UTBK 2023 yang telah dimiliki.</li>
                                                    <li>Peserta yang akan memilih program studi yang berbeda dengan program studi yang telah dipilih di ujian SNBT/ UTBK 2023, diharuskan untuk mengikuti ujian SMUP 2023.</li>
                                                    <li>Peserta yang menggunakan nilai SMUP atau mengikuti ujian SMUP, bebas memilih dua Program Studi sesuai minatnya dari kelompok ilmu yang sama atau berbeda (satu Saintek dan satu Soshum).</li>
                                                </ul>
                                            </li>
                                            <li>Daya tampung untuk Sarjana jalur mandiri berkisar 40 % dari total daya tampung Program Studi.</li>
                                            <li>Proses seleksi berdasarkan nilai SNBT/ UTBK atau nilai ujian SMUP.</li>
                                            <li>Kriteria kelulusan berdasarkan nilai tertinggi SNBT/ UTBK atau nilai SMUP sesuai kuota daya tampung yang ada.</li>
                                            <li>Ujian SMUP Sarjana jalur mandiri akan dilaksanakan secara daring yang dapat diikuti dari rumah masing-masing peserta pada tanggal 8 - 9 Juli 2023.</li>
                                        </ol>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-[#1C2027] xs:mb-16 lg:mb-0 xs:p-4 lg:pt-12 lg:px-12 rounded-3xl">
                            <div className="flex flex-col xs:gap-2 lg:gap-8">
                                <div className="xs:grid lg:hidden px-2 grid-cols-2 font-poppins font-bold">
                                    <h1>Jalur Masuk PTN</h1>
                                    <ImCross onClick={() => onClose()} className="justify-self-end self-center text-sm" /> 
                                </div>
                                <hr className="border-1 lg:hidden"/>
                                <div className="flex lg:justify-center items-center lg:self-start gap-8 xs:pt-4 lg:pt-0 xs:mx-2 lg:mx-12">
                                    <div className="bg-white xs:rounded-xl lg:rounded-3xl flex items-center aspect-square xs:w-[30vw] lg:w-[12rem]">
                                        <img src="/info/undip.png" className="object-contain object-center p-4"></img>
                                    </div>
                                    <h1 className="font-ethnocentric xs:text-2xl lg:text-4xl">UM UNDIP</h1>
                                </div>
                                <hr className="border-2 xs:hidden lg:block"/>
                                <div className="font-poppins xs:px-4 lg:px-10 lg:mx-2 xs:py-4 lg:py-0 lg:pb-4 flex flex-col gap-8 lg:h-[40vh] scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                    <div className="flex flex-col gap-4">
                                        <p className="lg:text-lg leading-relaxed">Universitas Diponegoro membuka kembali Ujian Mandiri (UM) S1 dengan menggunakan metode gabungan antara portofolio dan Tes Potensi Skolastik (TPS) Secara Online.</p>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Pilihan Jalur Ujian Mandiri (UM) S1:</h1>
                                        <p className="lg:text-lg leading-relaxed">Anda dapat memilih salah satu jalur dari ketiga pilihan jalur dibawah ini:</p>
                                        <ol className="list-decimal list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Jalur KIP dan/atau Golongan tidak mampu yang dibuktikan dengan Kepemilikan KIP (Kartu Indonesia Pintar) ditetapkan UKT Golongan 1-3 tanpa SPI</li>
                                            <li>Jalur Reguler, pembayaran meliputi UKT tertinggi dan SPI sesuai pilihan golongan (1 atau 2)</li>
                                            <li>Jalur Kemitraan (untuk umum), pembayaran meliputi UKT Tertinggi dan SPI diatas golongan II</li>
                                        </ol>
                                    </div>  
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Persiapkan sebelum mendaftar:</h1>
                                        <ol className="list-decimal list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Nilai Raport</li>
                                            <li>Prestasi Non Akademik/Kejuaraan (bila ada)</li>
                                            <li>Esai tentang Wawasan Kebangsaan</li>
                                        </ol>
                                    </div>  
                                    <div className="flex flex-col gap-4">
                                        <h1 className="font-bold xs:text-lg lg:text-xl">Persyaratan peserta Ujian Mandiri (UM) S1:</h1>
                                        <ol className="list-decimal list-inside !leading-loose px-8 lg:text-lg">
                                            <li>Siswa lulusan SMA/SMK/MA atau yang sederajat, lulus ujian persamaan, atau yang setara lainnya (paket C) tahun 2022, 2021 dan 2020</li>
                                            <li>Memenuhi persyaratan sesuai program studi yang dituju,</li>
                                            <li>Usia maksimal 22 tahun</li>
                                        </ol>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="fixed bottom-0 z-50">
                    <div className="w-screen h-20 bg-gradient-to-t from-black"></div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-black absolute top-[calc(50vh-8rem)] text-white text-5xl xs:hidden lg:flex justify-center items-center h-[16rem] z-10 left-0 right-auto cursor-pointer" onClick={prev}>
                <IoIosArrowBack></IoIosArrowBack>
            </div>
            <div className="bg-gradient-to-l from-black absolute top-[calc(50vh-8rem)] text-white text-5xl xs:hidden lg:flex justify-center items-center h-[16rem] z-10 right-0 left-auto cursor-pointer" onClick={next}>
                <IoIosArrowForward></IoIosArrowForward>
            </div>
        </div>
    )
}