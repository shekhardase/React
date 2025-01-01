import React, { useRef, useEffect } from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

function QuickLinks() {

    useGSAP(() => {
        gsap.to(".quicklinks", {
          marker: true,

        })
    })

    return (
        <div
            onScroll={scrollAnimation}
            className="quicklinks mt-10 w-auto flex flex-col items-center font-nunito font-bold text-black text-xl">
            <h1 className="mb-5 text-3xl">
                Quick Links
            </h1>

            <div className="flex flex-wrap md:flex-nowrap justify-center items-center space-x-4 md:space-x-4 md:space-y-0 space-y-4 p-4 bg-slate-300 border-t-4 border-b-4 border-black w-full">

                <div className="flex items-center justify-between px-4 py-2 bg-slate-400 hover:bg-slate-900 transition rounded-md shadow-md w-full md:w-auto">
                    <a href="#" className="text-black hover:text-white text-base md:text-lg">
                        Blog
                    </a>
                    <span className="ml-2 text-base md:text-lg hover:text-white ">↗</span>
                </div>

                <div className="flex items-center justify-between px-4 py-2 bg-slate-400 hover:bg-slate-900 transition rounded-md shadow-md w-full md:w-auto">
                    <a href="#" className="text-black hover:text-white text-base md:text-lg">
                        Projects
                    </a>
                    <span className="ml-2 text-base md:text-lg hover:text-white">↗</span>
                </div>

                <div className="flex items-center justify-between px-4 py-2 bg-slate-400 hover:bg-slate-900 transition rounded-md shadow-md w-full md:w-auto">
                    <a href="#" className="text-black hover:text-white text-base md:text-lg">
                        About
                    </a>
                    <span className="ml-2 text-base md:text-lg hover:text-white">↗</span>
                </div>

                <div className="flex items-center justify-between px-4 py-2 bg-slate-400 hover:bg-slate-900 transition rounded-md shadow-md w-full md:w-auto">
                    <a href="#" className="text-black hover:text-white text-base md:text-lg">
                        Contact
                    </a>
                    <span className="ml-2 text-base md:text-lg hover:text-white">↗</span>
                </div>
            </div>
        </div>
    );
}

export default QuickLinks;
