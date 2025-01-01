import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Card = () => {
    const boxRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const box = boxRef.current;
        const but = buttonRef.current;

        // Initial gradient
        gsap.set(box, {
            backgroundImage: "linear-gradient(to bottom right, rgba(100,116,139,1), rgba(100,116,139,0.01))",
        });

        // Apply hover animation
        const hoverIn = () => {
            gsap.to(box, {
                backgroundImage: "linear-gradient(to bottom right, rgba(100,116,139,0.01), rgba(100,116,139,1))", // Slate gradient
                duration: 0.5,
                ease: "power2.inOut",
                color: "black",
                scale: 1.1,
            });

            gsap.to(but, {
                backgroundImage: "linear-gradient(to right, rgba(100,116,139,1), rgba(148,163,184,1))", // Button gradient on hover
                duration: 0.3,
                ease: "power2.inOut",
                color: "white",
                scale: 1.05,
            });
        };

        const hoverOut = () => {
            gsap.to(box, {
                backgroundImage: "linear-gradient(to bottom right, rgba(100,116,139,1), rgba(100,116,139,0.01))", // Reverse gradient
                duration: 0.5,
                ease: "power2.inOut",
                color: "black",
                scale: 1,
            });

            gsap.to(but, {
                backgroundImage: "linear-gradient(to right, rgba(148,163,184,1), rgba(100,116,139,1))", // Reverse gradient for button
                duration: 0.3,
                ease: "power2.inOut",
                color: "white",
                scale: 1,
            });
        };

        box.addEventListener("mouseenter", hoverIn);
        box.addEventListener("mouseleave", hoverOut);
        but.addEventListener("mouseenter", hoverIn);
        but.addEventListener("mouseleave", hoverOut);

        // Cleanup listeners
        return () => {
            box.removeEventListener("mouseenter", hoverIn);
            box.removeEventListener("mouseleave", hoverOut);
            but.removeEventListener("mouseenter", hoverIn);
            but.removeEventListener("mouseleave", hoverOut);
        };
    }, []);

    return (
        <div
            ref={boxRef}
            className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl"
        >
            <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-slate-500 bg-clip-border text-white shadow-lg shadow-slate-500/40 bg-gradient-to-r from-slate-500 to-slate-600">
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-slate-900 antialiased">
                    Tailwind card
                </h5>
                <p className="block font-sans text-base font-semibold leading-relaxed text-inherit antialiased ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                </p>
            </div>
            <div className="p-6 pt-0">
                <button
                    ref={buttonRef}
                    data-ripple-light="true"
                    type="button"
                    className="select-none rounded-lg bg-gradient-to-r from-slate-500 to-slate-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-slate-500/20 transition-all hover:shadow-lg hover:shadow-slate-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    Read More
                </button>
            </div>
        </div>
    );
};

export default Card;

