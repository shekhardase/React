import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const FirstHero = () => {
    const infoRef = useRef(null); // Ref for the information section
    const imageRef = useRef(null); // Ref for the image section

    useEffect(() => {
        // GSAP context for better cleanup
        const ctx = gsap.context(() => {
            // Animation for the information section (slide in from the left)

            // Animation for the image section (slide in from the right)
            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    duration: 0.8,
                    y: 100, // Slide in from the right
                    // opacity: 0, // Start invisible
                    ease: "power2.inOut",
                });
            }
        });

        // Cleanup on component unmount
        return () => ctx.revert();
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <div>
            <div className="align mt-10 p-5" ref={imageRef}>
                <div className="flex justify-between items-center max-w-7xl mx-auto p-10">
                    {/* Information Section */}
                    <div
                        className="information font-nunito font-bold
                        rounded-md text-black bg-slate-300 p-10 w-1/2 shadow-2xl
                        hover:bg-black ease-in-out duration-300 hover:text-white
                        animate-fade-in-right"
                        ref={infoRef} // Attach ref to the information section

                    >
                        <p className="text-6xl font-nunito font-bold ">Hi, I'm Shekhar</p>
                        <p className="mt-5 font-nunito font-bold">I’m a Computer Engineering student with a knack for creating impactful solutions. From crafting immersive RPG games to building intuitive web applications, I thrive on leveraging my skills in programming, design, and leadership to turn ideas into reality.</p>
                        <div className="flex justify-center p-2 mt-8 ">
                            <button
                                class="cursor-pointer flex justify-between bg-gray-800 px-5 py-4 rounded-full text-white tracking-wider shadow-xl hover:bg-white hover:scale-105 duration-500 hover:ring-1 hover:text-black hover:ring-gray-800 ease-in-out font-nunito font-bold"
                            >
                                Resume
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    class="w-5 h-5 animate-bounce"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                                    ></path>
                                </svg>
                            </button>

                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="image w-1/2 flex justify-center ml-10 hover:scale-105 duration-300 ease-in-out
                    " >
                        <img
                            src="https://cdn.prod.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085c39c02c107_mac.svg"
                            alt="Mac Illustration"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FirstHero;
