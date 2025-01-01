import React, { useRef, useEffect } from "react";
import "../index.css";
import gsap from "gsap";


// import Cursor from "./Components/Cursor";
const Heading = () => {
    // Hover animation - upside down effect
    const hoverAnimation = (event) => {
        gsap.killTweensOf(event.target); // Stop any ongoing animations
        gsap.to(event.target, {
            duration: 0.7,
            rotationX: 360, // Rotate upside down along the X-axis
            ease: "power3.inOut",
        });
    };

    // Hover out animation - transition back to the original state
    const hoverOutAnimation = (event) => {
        gsap.killTweensOf(event.target); // Stop any ongoing animations
        gsap.to(event.target, {
            duration: 0.7,
            rotationX: 0, // Return to original orientation
            ease: "power3.inOut",

            yoyo: true,
        });
    };

    // Ref for the navbar element
    const navbarRef = useRef(null);

    useEffect(() => {
        const navbar = navbarRef.current; // Get the current navbar element
        if (navbar) {
            // Use GSAP context for cleanup and proper animation re-rendering
            const ctx = gsap.context(() => {
                gsap.from(navbar, {
                    duration: 0.5,
                    y: -100, // Slide down from above
                    opacity: 10, // Start invisible
                    ease: "power2.inOut",
                });
            });

            return () => ctx.revert(); // Cleanup GSAP context on component unmount
        }
    }, []);

    return (
        <div>

            <div
                ref={navbarRef}
                className="navbar w-full flex items-center font-nunito font-bold text-black text-sm sm:text-xl bg-slate-300 border-b-4 border-black px-4 sm:px-12 "
            >
                {/* Logo */}
                <a
                    href="/"
                    className="flex items-center justify-center w-20 h-16 sm:w-12 sm:h-10"
                    onMouseOver={hoverAnimation}
                    onMouseOut={hoverOutAnimation}
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
                        href={`#${link.toLowerCase().replace(" ", "-")}`} // Create unique href
                        className="flex items-center justify-center w-40 h-16 hover:bg-slate-900 hover:text-white"
                        onMouseOver={hoverAnimation}
                        onMouseOut={hoverOutAnimation}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Heading;

