import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Card = () => {
    const boxRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const box = boxRef.current;
        const button = buttonRef.current;

        // Initial gradient
        gsap.set(box, {
            backgroundImage: "linear-gradient(to bottom right, rgba(100,116,139,1), rgba(100,116,139,0.01))",
        });

        // Hover animations
        const hoverIn = () => {
            gsap.to(box, {
                backgroundImage: "linear-gradient(to bottom right, rgba(100,116,139,0.01), rgba(100,116,139,1))",
                duration: 0.5,
                ease: "power2.inOut",
                scale: 1.05,
            });
            gsap.to(button, {
                backgroundImage: "linear-gradient(to right, rgba(100,116,139,1), rgba(148,163,184,1))",
                duration: 0.3,
                ease: "power2.inOut",
                scale: 1.05,
            });
        };

        const hoverOut = () => {
            gsap.to(box, {
                backgroundImage: "linear-gradient(to bottom right, rgba(100,116,139,1), rgba(100,116,139,0.01))",
                duration: 0.5,
                ease: "power2.inOut",
                scale: 1,
            });
            gsap.to(button, {
                backgroundImage: "linear-gradient(to right, rgba(148,163,184,1), rgba(100,116,139,1))",
                duration: 0.3,
                ease: "power2.inOut",
                scale: 1,
            });
        };

        box.addEventListener("mouseenter", hoverIn);
        box.addEventListener("mouseleave", hoverOut);

        return () => {
            box.removeEventListener("mouseenter", hoverIn);
            box.removeEventListener("mouseleave", hoverOut);
        };
    }, []);

    return (
        <div
            ref={boxRef}
            className="w-full max-w-sm bg-white rounded-lg shadow-lg transform transition-transform duration-300"
        >
            <div className="h-40 bg-slate-500 rounded-t-lg"></div>
            <div className="p-6">
                <h5 className="text-xl font-bold text-gray-900">Tailwind Card</h5>
                <p className="text-gray-700 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
                </p>
                <div className="mt-4">
                    <button
                        ref={buttonRef}
                        className="w-full py-2 bg-gradient-to-r from-slate-500 to-slate-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
