import React, { useRef } from "react";
import { gsap } from "gsap";

function HeroSection() {
    const headingRef = useRef(null);
    const heroRef = useRef(null);
    const handleMouseEnter = () => {
        // Hover animation for heading: Scale, color change, and box shadow
        gsap.to(headingRef.current, {
            scale: 1.2,
            color: "AliceBlue",
            // boxShadow: "0 4px 8px rgba(255, 255, 255, 0.3)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            duration: 0.3,
            ease: "power1.inOut",
            delay: 0.1,
        });
    };

    const handleMouseLeave = () => {
        // Revert to original scale, color, and remove box shadow
        gsap.to(headingRef.current, {
            scale: 1,
            color: "white",
            // boxShadow: "none",
            backgroundColor: "transparent",
            duration: 0.3,
            ease: "power1.inOut",
        });
    };
    return (
        <div
            ref={heroRef}
            className="hero"
            style={{
                textAlign: "center",
                padding: "50px",
                backgroundColor: "black",
                color: "white",
                minHeight: "100vh",
            }}
        >
            <h1
                ref={headingRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                }}
            >
                We are the Leaders in Interior Planning
            </h1>
            <p>
                We are a leading interior planning and construction company with over 20
                years of experience providing high-quality, cost-effective solutions
                for commercial and residential clients. Our team of experts works
                closely with clients to understand their unique needs and goals, then
                develops and implements customized plans to bring their vision to life.
            </p>
        </div>
    );
}

export default HeroSection;

