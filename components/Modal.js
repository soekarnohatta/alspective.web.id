import {useState, useEffect} from "react";
import SwiperCore, {Navigation} from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

import "swiper/css";
import 'swiper/css/navigation';

export default function Navbar({visibility, slideNum, onClose}) {
    if (!visibility) return null;

    const [swiper, setSwiper] = useState(null);

    const prev= () => {
        if (swiper) {
            swiper.slidePrev();
        }
    }

    const next= () => {
        if (swiper) {
            swiper.slideNext();
        }
    }

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    }

    SwiperCore.use([Navigation]);
    return (
        <div className="fixed inset-0 bg-black/50 z-50" id="wrapper" onClick={handleClose}>
            <div className="bg-[#1C2027] text-white xs:p-8 lg:p-16 rounded-3xl lg:m-24 shadow-lg shadow-white/10">
                <Swiper 
                    slidesPerGroup={1}
                    navigation={{
                        enabled: true,
                        prevEl: ".modal-nav-prev",
                        nextEl: ".modal-nav-next",
                    }}
                    modules={[Navigation]} 
                    initialSlide={slideNum}
                    onSwiper={(s) => setSwiper(s)}
                >
                    <SwiperSlide>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-8 mx-12">
                                <div className="bg-white rounded-3xl flex items-center aspect-square w-[12rem]">
                                    <img src="/info/snbp.png" className="object-contain object-center"></img>
                                </div>
                                <h1 className="font-ethnocentric xs:text-2xl lg:text-4xl">SNBP</h1>
                            </div>
                            <hr className="border-2"/>
                            <div className="font-poppins px-10 mx-2 flex flex-col gap-8 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Pengertian</h1>
                                    <p className="text-lg leading-relaxed">
                                        SNBP atau Seleksi Nasional Berdasarkan Prestasi adalah salah satu seleksi bersama penerimaan mahasiswa baru yang penilaiannya berdasarkan nilai rapor dan prestasi siswa. SNBP dikenal sebelumnya dengan Seleksi Nasional Masuk Perguruan Tinggi Negeri atau (SNMPTN). 
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Bentuk Seleksi</h1>
                                    <p className="text-lg leading-relaxed">
                                        Seleksi SNBP dilakukan berdasarkan prestasi siswa. Prestasi yang dimaksud bisa berupa nilai atau prestasi akademik dan/atau prestasi non akademik seperti perlombaan dan organisasi.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Berkas atau Dokumen yang diperlukan</h1>
                                    <p className="text-lg leading-relaxed">
                                    Dokumen yang dibutuhkan untuk pendaftaran SNBP adalah rapor semester 1-5 dan juga sertifikat lomba atau kejuaraan sebagai dokumen penunjang yang bisa menjadi nilai plus dalam penilaian. Selain itu untuk beberapa jurusan seperti Olahraga, Seni Rupa, Desain, dan Musik memerlukan portofolio sebagai salah satu syarat pendaftaran. 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-8 mx-12">
                                <div className="bg-white rounded-3xl flex items-center aspect-square w-[12rem]">
                                    <img src="/info/snbt.png" className="object-contain object-center p-5"></img>
                                </div>
                                <h1 className="font-ethnocentric text-4xl">SNBT</h1>
                            </div>
                            <hr className="border-2"/>
                            <div className="font-poppins px-10 mx-2 flex flex-col gap-8 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Apa itu SNBT?</h1>
                                    <p className="text-lg leading-relaxed">
                                        Seleksi Nasional Berdasarkan Tes atau yang biasa disingkat SNBT,  merupakan salah satu jalur seleksi masuk perguruan tinggi negeri tahun 2023 yang diadakan di bawah lembaga SNPMB BPPP Kemdikbud 2023. Proses seleksi ini sebelumnya dikenal dengan sebutan SBMPTN. SNBT merupakan seleksi yang dilakukan berdasarkan hasil nilai Tes Skolastik berbasis komputer.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Hal apa yang perlu disiapkan untuk SNBT?</h1>
                                    <div className="text-lg leading-relaxed px-12">
                                        <ol className="list-decimal">
                                            <li className="pb-4">
                                                <h1>Dokumen</h1>
                                                <p>Saat akan melakukan SNBT, ada beberapa dokumen yang wajib dibawa oleh peserta, yaitu sebagai berikut:</p>
                                                <ul className="list-disc list-inside leading-loose px-8">
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
                                                <ul className="list-disc list-inside leading-loose px-8">
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
                                                <ul className="list-disc list-inside leading-loose px-8">
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
                                                <ul className="list-disc list-inside leading-loose px-8">
                                                    <li>foto terbaru (berwarna)</li>
                                                    <li>stempel/cap sekolah</li>
                                                    <li>tanda tangan Kepala Sekolah</li>
                                                </ul>
                                            </li>
                                            <li className="pb-4">
                                                <h1>Portofolio</h1>
                                                <p>
                                                    Menurut laman resmi SNPMB, portofolio merupakan dokumentasi kumpulan karya dan atau penampilan (performance) siswa dalam bidang Seni atau Olahraga. Portofolio berisi kombinasi antara dokumentasi karya atau penampilan yang khusus dibuat oleh peserta sesuai dengan instruksi untuk setiap bidang, dan dokumentasi karya atau penampilan yang dimiliki atau dibuat oleh peserta semasa mengikuti pendidikan menengah. Portofolio wajib untuk peserta yang memilih program studi Bidang Seni dan Olahraga. Terdapat 10 jenis portofolio, yaitu:

                                                <ul className="list-disc list-inside leading-loose px-8">
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
                                                </p>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-8 mx-12">
                                <div className="bg-white rounded-3xl flex items-center aspect-square w-[12rem]">
                                    <img src="/info/ui.png" className="object-contain object-center p-4"></img>
                                </div>
                                <h1 className="font-ethnocentric text-4xl">SIMAK UI</h1>
                            </div>
                            <hr className="border-2"/>
                            <div className="font-poppins px-10 mx-2 flex flex-col gap-8 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Pengertian</h1>
                                    <p className="text-lg leading-relaxed">
                                    Simak-UI (Seleksi Masuk UI) adalah ujian seleksi terpadu masuk UI yang diselenggarakan UI bagi calon mahasiswa yang ingin kuliah di UI. Program pendidikan yang dibuka pada SIMAK UI mulai dari Program Vokasi (D3 dan D4), Sarjana Reguler, Sarjana Kelas Paralel, Sarjana Ekstensi/Paralel untuk lulusan D3, Profesi, Spesialis, Magister dan Doktor. Sedangkan ujian SIMAK Sarjana Kelas Internasional diselenggarakan pada waktu yang berbeda. 
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Bentuk Ujian</h1>
                                    <p className="text-lg leading-relaxed">
                                        Materi Ujian SIMAK UI S1 Paralel dan Vokasi (D3) pada 2023 terdiri dari:
                                    </p>
                                    <ul className="list-disc list-inside leading-loose px-8 text-lg">
                                        <li>Kemampuan Dasar (KD): Matematika Dasar, Bahasa Indonesia, dan Bahasa Inggris.</li>
                                        <li>Kemampuan IPA (KA): Matematika IPA, Fisika, Kimia, Biologi.</li>
                                        <li>Kemampuan IPS (KS): Ekonomi, Sejarah, Geografi, Sosiologi.</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Berkas Yang Harus Dipersiapkan</h1>
                                    <div className="text-lg leading-relaxed px-12">
                                        <ol className="list-decimal">
                                            <li className="pb-4">Telah lulus dari SMA/SMK/MA/sederajat.</li>
                                            <li className="pb-4">Memiliki ijazah/A Level/IB Diploma/surat penyetaraan dari Departemen Pendidikan Nasional.</li>
                                            <li className="pb-4">Bagi peserta SIMAK UI S1 Reguler, wajib mengikuti dan memiliki skor UTBK 2023 sesuai dengan program studi yang dipilih.</li>
                                            <li className="pb-4">Memiliki kesehatan yang memadai sehingga tidak mengganggu proses pembelajaran pada program studi yang dipilih.</li>
                                            <li className="pb-4">Bagi peserta SIMAK UI S1 Kelas Internasional, wajib memiliki sertifikat TOEFL/IELTS. Jenis TOEFL yang diakui adalah yang disertifikasi ETS (ITP skor min.500 atau iBT skor minimum 61 atau CBT skor minimum 173) atau IELTS dengan skor minimum 5.5.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-8 mx-12">
                                <div className="bg-white rounded-3xl flex items-center aspect-square w-[12rem]">
                                    <img src="/info/itb.png" className="object-contain object-center p-4"></img>
                                </div>
                                <h1 className="font-ethnocentric text-4xl">SM ITB</h1>
                            </div>
                            <hr className="border-2"/>
                            <div className="font-poppins px-10 mx-2 flex flex-col gap-8 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                <div className="flex flex-col gap-4">
                                    <p className="text-lg leading-relaxed">
                                        Jalur Seleksi Mandiri ITB (SM-ITB) memberi kesempatan lebih luas bagi siswa lulusan SMA baik WNI maupun WNA untuk mengikuti pendidikan program sarjana di Institut Teknologi Bandung.<br /><br />
                                        Dalam proses penerimaan SM-ITB, ITB tetap menggunakan kriteria kemampuan akademik yang tinggi sebagai satu-satunya kriteria. Proses penerimaan mahasiswa baru melalui jalur Seleksi Mandiri ITB (SM-ITB) dilaksanakan dengan menggunakan komponen penilaian sebagai berikut:
                                        <ul className="list-disc list-inside leading-loose px-8 text-lg">
                                            <li>Hasil UTBK dan nilai rapor bagi pendaftar ke fakultas/sekolah selain FSRD</li>
                                            <li>Hasil UTBK dan nilai rapor, hasil kemampuan seni rupa, bagi pendaftar ke FSRD</li>
                                        </ul>
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-lg leading-relaxed">
                                        Persyaratan mengikuti Seleksi Mandiri ITB:
                                    </p>
                                    <div className="text-lg leading-relaxed px-12">
                                        <ol className="list-decimal">
                                            <li className="pb-4">Berasal dari SMA/MA jurusan IPA atau SMA/MA jurusan IPS atau lulusan Paket C jurusan IPA/IPS, dengan tahun ijazah 2020, 2021, atau 2022.</li>
                                            <li className="pb-4">Memiliki NISN (Nomor Induk Siswa Nasional)</li>
                                            <li className="pb-4">Memiliki dan mengunggah nilai rapor SMA/MA/Paket C lengkap, semester 1 s.d semester 6.</li>
                                            <li className="pb-4">Memiliki nilai UTBK 2022</li>
                                            <li className="pb-4">Tidak pernah tercatat sebagai mahasiswa program sarjana ITB.</li>
                                            <li className="pb-4">Tidak diterima sebagai calon mahasiswa ITB melalui jalur seleksi SNMPTN/SBMPTN atau seleksi program Sarjana-Internasional ITB tahun 2022.</li>
                                            <li className="pb-4">Khusus untuk peminat FSRD, wajib mengikuti Tes Kemampuan Seni Rupa secara luring.</li>
                                            <li className="pb-4">Lulusan tahun 2020 dan 2021 dapat mendaftar SM-ITB 2022 dengan syarat memiliki nilai UTBK 2022.</li>
                                            <li className="pb-4">
                                                Tidak buta warna, baik buta warna total maupun buta warna parsial, bagi peminat:
                                                <ul className="list-[lower-alpha] list-inside leading-loose px-8 text-lg">
                                                    <li>Sekolah Farmasi (SF)</li>
                                                    <li>Sekolah Ilmu dan Rekayasa Hayati (SITH)</li>
                                                    <li>Fakultas Teknik Pertambangan dan Perminyakan (FTTM)</li>
                                                    <li>Fakultas Seni Rupa dan Desain (FSRD)</li>
                                                    <li>Fakultas Teknologi Industri (FTI) – Kampus Jatinangor</li>
                                                    <li>Program Studi Kimia (FMIPA-IPA)</li>
                                                    <li>Program Studi Teknik Geologi (FITB-G)</li>
                                                    <li>Program Studi Teknik Kimia (FTI-G)</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-8 mx-12">
                                <div className="bg-white rounded-3xl flex items-center aspect-square w-[12rem]">
                                    <img src="/info/ugm.png" className="object-contain object-center p-5"></img>
                                </div>
                                <h1 className="font-ethnocentric text-4xl">UTUL UGM</h1>
                            </div>
                            <hr className="border-2"/>
                            <div className="font-poppins px-10 mx-2 flex flex-col gap-8 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Pengertian</h1>
                                    <p className="text-lg leading-relaxed">
                                        Utul sendiri ialah singkatan dari Ujian Tulis. Namun, sekarang kita tidak menggunakan kertas dan pensil lagi saat ujian, melainkan komputer. Itulah sebabnya Utul UGM secara resmi disebut sebagai CBT, kependekan dari Computer Based Test.<br /><br /> Ujian Tulis Universitas Gadjah Mada adalah jalur seleksi mandiri masuk UGM yang menggunakan kombinasi hasil ujian tulis berbasis komputer (UTBK) dan nilai ujian tulis (UTUL). Mahasiswa dapat memilih total tiga program studi pada jenjang Sarjana (S1) serta jenjang Diploma 4 (Sarjana Terapan).
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Bentuk Ujian</h1>
                                    <p className="text-lg leading-relaxed">
                                        Kelompok ujian tulis dibagi menjadi tiga jenis, yaitu kelompok ujian sains dan teknologi (Saintek), kelompok ujian sosial dan humaniora (Soshum) dan kelompok ujian campuran (Saintek dan Soshum). Bentuk ujiannya antara lain: Tes Potensi Akademik (TPA), Tes Kemampuan Dasar Umum (Matematika Dasa, Bahasa Indonesia, dan Bahasa Inggris), dan Tes Kemampuan Saintek (Fisika, Kimia, Biologi, dan Matematika Dasar), dan Soshum (Sosiologi, Ekonomi, Geografi, dan Sejarah).
                                    </p>
                                    <h1 className="text-lg">Kelompok Saintek</h1>
                                    <ul className="list-disc list-inside leading-loose px-8 text-lg">
                                        <li>Tes Kemampuan Akademik (TKA) Saintek: Fisika, Kimia, Biologi, dan Matematika IPA</li>
                                        <li>Tes Kemampuan Dasar Umum (TKDU) : Matematika Dasar, Bahasa Indonesia, dan Bahasa Inggris</li>
                                        <li>Tes Potensi Akademik (TPA)</li>
                                    </ul>
                                    <h1 className="text-lg">Kelompok Soshum</h1>
                                    <ul className="list-disc list-inside leading-loose px-8 text-lg">
                                        <li>Tes Kemampuan Akademik (TKA) Soshum: Sejarah, Geografi, Ekonomi, dan Sosiologi</li>
                                        <li>Tes Kemampuan Dasar Umum (TKDU) : Matematika Dasar, Bahasa Indonesia, dan Bahasa Inggris</li>
                                        <li>Tes Potensi Akademik (TPA)</li>
                                    </ul>
                                    <h1 className="text-lg">Kelompok Saintek</h1>
                                    <ul className="list-disc list-inside leading-loose px-8 text-lg">
                                        <li>Tes Kemampuan Akademik (TKA) Saintek: Fisika, Kimia, Biologi, dan Matematika IPA</li>
                                        <li>Tes Kemampuan Akademik (TKA) Soshum: Sejarah, Geografi, Ekonomi, dan Sosiologi</li>
                                        <li>Tes Kemampuan Dasar Umum (TKDU) : Matematika Dasar, Bahasa Indonesia, dan Bahasa Inggris</li>
                                        <li>Tes Potensi Akademik (TPA)</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Berkas Yang Harus Dipersiapkan</h1>
                                    <p className="text-lg leading-relaxed">
                                    Seleksi di jalur CBT-UM UGM didasarkan pada kombinasi antara nilai Computer Based Test Ujian Masuk UGM dan skor UTBK SBMPTN 2022. Selain itu, peserta seleksi dapat memilih maksimal 2 program studi (prodi) S1 atau sarjana terapan di UGM. Seleksi UTUL UGM 2022 bisa diikuti oleh pada lulusan SMA/SMK/MA/Paket C atau sederajat dari tahun 2023, 2022, dan 2021. Berikut detail syarat pendaftaran UTUL UGM dan ketentuan mengikuti ujian di CBT-UM UGM:
                                    </p>
                                    <div className="text-lg leading-relaxed px-12">
                                        <ol className="list-decimal">
                                            <li className="pb-4">
                                                <h1 className="font-bold">Syarat umum di pendaftaran UTUL UGM</h1>
                                                <ul className="list-disc list-inside leading-loose px-8">
                                                    <li>Warga Negara Indonesia</li>
                                                    <li>Lulusan SMA/SMK/MA/Paket C/sederajat tahun 2023, 2022, dan 2021</li>
                                                    <li>Punya skor UTBK-SNBT 2023</li>
                                                    <li>Kesehatan memadai sehingga tidak mengganggu kelancaran proses studi.</li>
                                                </ul>
                                            </li>
                                            <li className="pb-4">
                                                <h1 className="font-bold">Syarat khusus di pendaftaran UTUL UGM</h1>
                                                <ul className="list-disc list-inside leading-loose px-8">
                                                    <li>Lulusan SMA/SMK/MA/Paket C/sederajat Tahun 2022 dan 2021 punya ijazah.</li>
                                                    <li>Lulusan SMA/SMK/MA/Paket C atau sederajat Tahun 2023 minimal harus memiliki</li>
                                                    <li>Surat Keterangan Lulus (SKL) yang sekurang-kurangnya memuat informasi jati diri beserta foto terbaru yang dibubuhi cap/stempel dari sekolah/lembaga penyelenggara Paket C yang sah.</li>
                                                    <li>Bawa Ijazah (asli atau fotokopi berlegalisir) atau SKL (asli) saat ujian CBT-UM UGM.</li>
                                                    <li>Bawa Kartu Ujian CBT-UM UGM Tahun 2023 saat ujian CBT-UM UGM.</li>
                                                    <li>Bawa Kartu Identitas (KTP/KK) saat ujian CBT-UM UGM.</li>
                                                    <li>Menunjukkan sertifikat vaksin melalui aplikasi peduli lindungi atau membawa kartu vaksin saat ujian CBT-UM UGM.</li>
                                                    <li>Apabila peserta belum vaksin Covid 19, menunjukkan hasil negatif (rapid tes antigen 1x24 jam atau RT-PCR 3x24 jam) saat ujian CBT-UM UGM.</li>
                                                </ul>
                                            </li>
                                            <li className="pb-4">
                                                <h1 className="font-bold">Syarat dokumen di pendaftaran UTUL UGM</h1>
                                                <p className="text-lg leading-relaxed">
                                                Ada tiga jenis dokumen yang harus diunggah saat melakukan pendaftaran CBT- UM UGM 2022. Ketiga dokumen itu harus diunggah dalam bentuk file PDF, dengan ukuran file minimal 150 Kb dan maksimal 800 Kb.<br /><br/> Tiga dokumen yang harus diunggah saat pendaftaran online CBT-UM UGM 2022 adalah:
                                                </p>
                                                <ul className="list-[lower-alpha] list-inside leading-loose px-8">
                                                    <li>Ijazah (lulusan 2023, 2022, dan 2021) atau Surat Keterangan Lulus/SKL (lulusan di Tahun 2023 yang belum memperoleh ijazah)</li>
                                                    <li>Kartu Peserta UTBK-SBMPTN Tahun 2023</li>
                                                    <li>Kartu Tanda Penduduk (KTP) atau Kartu Keluarga (KK).</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-8 mx-12">
                                <div className="bg-white rounded-3xl flex items-center aspect-square w-[12rem]">
                                    <img src="/info/unpad.png" className="object-contain object-center"></img>
                                </div>
                                <h1 className="font-ethnocentric text-4xl">SMUP Unpad</h1>
                            </div>
                            <hr className="border-2"/>
                            <div className="font-poppins px-10 mx-2 flex flex-col gap-8 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                <div className="flex flex-col gap-4">
                                    <p className="text-lg leading-relaxed">
                                        SMUP Program Sarjana Jalur Mandiri Universitas Padjadjaran (Unpad) mengadopsi sistem seleksi masuk dari pemerintah sesuai dengan Permendikbudristek No. 48 Tahun 2022. SMUP dapat diikuti oleh semua Warga Negara Indonesia (WNI) yang lulus pada pendidikan setingkat Sekolah Menengah Atas di tahun 2021, 2022 dan 2023, dengan tidak harus terdaftar sebelumnya sebagai peserta SNMPTN ataupun SBMPTN.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <p className="text-lg leading-relaxed">
                                    Peserta SMUP Program Sarjana Jalur Mandiri dapat mendaftar dengan mengikuti ketentuan sebagai berikut:
                                    </p>
                                    <div className="text-lg leading-relaxed px-12">
                                        <ol className="list-decimal">
                                            <li className="pb-4">Pendaftar harus memiliki nilai SNBT/ UTBK 2023 atau nilai SMUP 2023</li>
                                            <li className="pb-4">
                                                Pendaftar <span className="font-bold"> hanya dapat memilih</span> salah satu dari dua skema pendaftaran dan seleksi, yaitu:
                                                <ul className="list-disc list-inside leading-loose px-8">
                                                    <li><span className="font-bold">Skema 1</span> : Peserta menggunakan nilai SNBT/ UTBK 2023</li>
                                                    <li><span className="font-bold">Skema 2</span> : Peserta menggunakan nilai SMUP (untuk siswa lulusan tahun 2021, 2022, 2023).</li>
                                                </ul>
                                            </li>
                                            <li className="pb-4">Materi Ujian SMUP berupa Ujian Tes Kemampuan Belajar (<span className="font-bold">TKB</span>) yang sepadan dengan ujian SNBT dan dilakukan secara on-line.</li>
                                            <li className="pb-4">
                                                Pendaftar dapat memilih paling banyak dua program studi dengan ketentuan:
                                                <ul className="list-disc list-inside leading-loose px-8 text-lg">
                                                    <li>Peserta yang menggunakan nilai SNBT/ UTBK 2023 hanya bisa memilih dua Program Studi di Unpad sesuai dengan pilihan program studi yang ada di kartu ujian SNBT/ UTBK 2023 yang telah dimiliki.</li>
                                                    <li>Peserta yang akan memilih program studi yang berbeda dengan program studi yang telah dipilih di ujian SNBT/ UTBK 2023, diharuskan untuk mengikuti ujian SMUP 2023.</li>
                                                    <li>Peserta yang menggunakan nilai SMUP atau mengikuti ujian SMUP, bebas memilih dua Program Studi sesuai minatnya dari kelompok ilmu yang sama atau berbeda (satu Saintek dan satu Sosum).</li>
                                                </ul>
                                            </li>
                                            <li className="pb-4">Daya tampung untuk Sarjana jalur mandiri berkisar 40 % dari total daya tampung Program Studi.</li>
                                            <li className="pb-4">Proses seleksi berdasarkan nilai SNBT/ UTBK atau nilai ujian SMUP.</li>
                                            <li className="pb-4">Kriteria kelulusan berdasarkan nilai tertinggi SNBT/ UTBK atau nilai SMUP sesuai kuota daya tampung yang ada.</li>
                                            <li className="pb-4">Ujian SMUP Sarjana jalur mandiri akan dilaksanakan secara daring yang dapat diikuti dari rumahmasing-masing peserta pada tanggal 8 - 9 Juli 2023.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col gap-8">
                            <div className="flex items-center gap-8 mx-12">
                                <div className="bg-white rounded-3xl flex items-center aspect-square w-[12rem]">
                                    <img src="/info/undip.png" className="object-contain object-center p-6"></img>
                                </div>
                                <h1 className="font-ethnocentric text-4xl">UM Undip</h1>
                            </div>
                            <hr className="border-2"/>
                            <div className="font-poppins px-10 mx-2 flex flex-col gap-8 h-[40vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-white scrollbar-track-neutral-600 scrollbar-thumb-rounded scrollbar-track-rounded">
                                <div className="flex flex-col gap-4">
                                    <p className="text-lg leading-relaxed">
                                        Universitas Diponegoro membuka kembali Ujian Mandiri (UM) S1 dengan menggunakan metode gabungan antara portofolio dan Tes Potensi Skolastik (TPS) Secara Online.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">
                                        Pilihan Jalur Ujian Mandiri (UM) S1:
                                    </h1>
                                    <div className="text-lg leading-relaxed px-12">
                                        <p className="text-lg leading-relaxed">
                                            Universitas Diponegoro membuka kembali Ujian Mandiri (UM) S1 dengan menggunakan metode gabungan antara portofolio dan Tes Potensi Skolastik (TPS) Secara Online.
                                        </p>
                                        <div className="text-lg leading-relaxed px-12">
                                            <ol className="list-decimal">
                                                <li className="pb-4">Jalur KIP dan/atau Golongan tidak mampu yang dibuktikan dengan Kepemilikan KIP (Kartu Indonesia Pintar) ditetapkan UKT Golongan 1-3 tanpa SPI</li>
                                                <li className="pb-4">Jalur Reguler, pembayaran meliputi UKT tertinggi dan SPI sesuai pilihan golongan (1 atau 2)</li>
                                                <li className="pb-4">Jalur Kemitraan (untuk umum), pembayaran meliputi UKT Tertinggi dan SPI diatas golongan II</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Persiapkan sebelum mendaftar:</h1>
                                    <div className="text-lg leading-relaxed px-12">
                                        <div className="text-lg leading-relaxed px-12">
                                            <ol className="list-decimal">
                                                <li className="pb-4">Nilai Raport</li>
                                                <li className="pb-4">Prestasi Non Akademik/Kejuaraan (bila ada)</li>
                                                <li className="pb-4">Esai tentang Wawasan Kebangsaan</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h1 className="font-bold text-xl">Persyaratan peserta Ujian Mandiri (UM) S1:</h1>
                                    <div className="text-lg leading-relaxed px-12">
                                        <div className="text-lg leading-relaxed px-12">
                                            <ol className="list-decimal">
                                                <li className="pb-4">Siswa lulusan SMA/SMK/MA atau yang sederajat, lulus ujian persamaan, atau yang setara lainnya (paket C) tahun 2022, 2021 dan 2020</li>
                                                <li className="pb-4">Memenuhi persyaratan sesuai program studi yang dituju,</li>
                                                <li className="pb-4">Usia maksimal 22 tahun</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
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