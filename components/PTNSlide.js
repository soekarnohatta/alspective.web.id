export default function PTNSlide({name, logo, slideNumber, changeSlideNum, showModal, imgClassName}) {
    return (
        <div className="bg-white rounded-3xl flex justify-center items-center aspect-square group w-full">
            <img src={logo} className={`w-full h-full object-contain object-center lg:group-hover:opacity-50 ${imgClassName}`}></img>
            <div className="bg-gradient-to-t from-neutral-800 h-full w-full flex justify-center items-center absolute rounded-3xl text-6xl text-white text-center font-montserrat font-extrabold transition opacity-0 group-hover:opacity-100 cursor-pointer" onClick={() => {changeSlideNum(slideNumber); showModal(true);
            }}><span className="xs:text-transparent lg:text-white">{name}</span></div>
        </div>
    )
}