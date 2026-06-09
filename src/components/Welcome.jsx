import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="welcome"
      className="h-screen flex flex-col justify-center items-center text-white relative"
    >
      <p
        className={`absolute top-1/12 text-sm bg-white/20 p-2 border-x-4 border-white backdrop-blur-sm transition-all duration-700 ${
          showText ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        It is recommended to view this portfolio on a laptop or tablet 💙🙏🏻
      </p>

      <p ref={subtitleRef} className="text-sm sm:text-base">
        Hey, I'm Maryam! Welcom to my
      </p>
      <h1 ref={titleRef} className="mt-7 text-7xl sm:text-9xl italic">
        <span>p</span>
        <span>o</span>
        <span>r</span>
        <span>t</span>
        <span>f</span>
        <span>o</span>
        <span>l</span>
        <span>i</span>
        <span>o</span>
      </h1>
    </section>
  );
}

export default Welcome;
