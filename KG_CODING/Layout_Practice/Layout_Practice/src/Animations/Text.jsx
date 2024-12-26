import React, { useRef } from "react";
import { gsap } from "gsap";

const HoverText = () => {
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(textRef.current, { y: -10, color: "#ff6347", duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(textRef.current, { y: 0, color: "#000", duration: 0.3 });
  };

  return (
    <h1
      ref={textRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer" }}
    >
      Hover Over Me
    </h1>
  );
};

export default HoverText;
