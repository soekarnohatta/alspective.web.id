export default function Home() {

  return (
    <>
      <div  className="xs:bg-[url('/landing/bg_mobile.png')] lg:bg-[url('/landing/bg.png')] bg-cover xs:bg-[92.5%_bottom] lg:bg-center">
        <div className="h-screen flex justify-center items-center">
          <img src="/logo_landing.png" className="xs:w-[calc(100vh-300px)] lg:w-[calc(100vh-200px)] lg:pt-20"></img>
        </div>
        <div className="xs:hidden lg:block h-[1080px] py-16 pt-[16.5vw]">
          <div className="flex justify-center col-span-2 text-white">
            <img src="/landing/toinfinity.png" className="w-[calc(100vh-100px)] object-contain"></img>
          </div>
          <div className="flex px-60 py-60 justify-center">
            <img src="/landing/mascot.png" className="w-[calc(100vh-500px)] object-contain justify-self-center"></img>
            <div className="self-center">
              <h1 className="bg-gradient-to-b from-white to-gray-500 inline-block text-transparent bg-clip-text font-ethnocentric text-7xl">BIMBO</h1>
              <img src="/landing/line.png" className="w-[calc(100vh-625px)] object-contain"></img>
              <p className="text-white text-xl">Bimbo adalah seekor gajah ranger yang datang dari semesta parallel melalui sebuah portal. Dia akan membimbing siswa/i SMA Se-Indonesia untuk menjadi seorang space ranger yang tangguh dan mampu melampaui ketidakterbatasan.</p>
            </div>
          </div>
        </div>
        <div className="h-[1080px] xs:hidden lg:flex justify-center pt-[20vw]">
          <div>
            <h1 className="text-white font-ethnocentric text-7xl text-center">TIMELINE</h1>
            <img src="/landing/timeline.png" className="w-[50vw] object-contain pt-8"></img>
          </div>
        </div>
      </div>
    </>
  )
}
