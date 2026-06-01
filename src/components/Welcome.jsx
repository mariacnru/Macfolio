import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Welcome() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  return (
    <section
      id="welcome"
      className="h-screen flex flex-col justify-center items-center text-white"
    >
      <p ref={subtitleRef} className="">
        Hey, I'm Maryam! Welcom to my
      </p>
      <h1 ref={titleRef} className="mt-7 text-9xl italic">
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
