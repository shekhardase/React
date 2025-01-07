import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Card from "./Card";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            // GSAP animation for scrolling cards
            gsap.fromTo(
                container.children,
                {
                    y: 100, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger:
                    {
                        trigger: container,
                        start: "top 90%",
                        end: "bottom 10%",
                        scrub: true,
                    },
                }
            );
        }
    }, []);

    return (
        <div className="w-full px-4 py-6 bg-gray-100">
            <h1 className="flex mb-10 text-3xl items-center justify-center font-nunito font-extrabold text-black mt-10">Projects</h1>
            <div
                ref={containerRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >

                {Array(8)
                    .fill(0)
                    .map((_, index) => (
                        <Card key={index} />
                    ))}
            </div>
        </div>
    );
};

export default SmoothScroll;
