import React from "react";

export default function Navbar({visibility , onClose, children}) {
    if (!visibility) return null;

    const handleClose = (e) => {
        if (e.target.id === "wrapper") onClose();
    }

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className="bg-[#1C2027] text-white p-16 rounded-3xl m-24 shadow-lg shadow-white/10">{children}</div>
        </div>
    )
}