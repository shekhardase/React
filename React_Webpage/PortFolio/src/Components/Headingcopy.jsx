import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Heading = () => {

    const container = useRef(null);

    useGSAP(() => {
        gsap.to('.navbar', {
            rotate: 360,
            duration: 5,
            delay: 0.5
        });
    }, { scope: container }
    );

    return (
        <div>

            <div ref={container}
                className="navbar w-full flex items-center font-nunito font-bold text-black text-sm sm:text-xl bg-slate-300 border-b-4 border-black px-4 sm:px-12 "
            >
                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center justify-center w-20 h-16 sm:w-12 sm:h-10"
                >
                    <img
                        src="https://cdn.prod.website-files.com/5e87e737ee7085b9ba02c101/5e91e984961046c05f7459d8_mac-logo.svg"
                        alt="Logo"
                        className="w-12 h-12"
                    />
                </a>
                {["Projects", "Blog", "Learn", "Contact Me"].map((link, index) => (
                    <a
                        key={index}
                        href={`#${link.toLowerCase().replace(" ", "-")}`}
                        className="flex items-center justify-center w-40 h-16 hover:bg-slate-900 hover:text-white"
                    >
                        {link}
                    </a>
                ))}

            </div>
        </div>
    );
};
export default Heading;

