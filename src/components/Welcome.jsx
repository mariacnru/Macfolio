import React, { useEffect, useState } from "react";

function Welcome() {
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
        className={`absolute top-1/12 text-sm bg-white/20 p-2 border-x-4 border-white backdrop-blur-sm transition-opacity duration-700 ${
          showText ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        It is recommended to view this portfolio on a laptop or tablet 💙🙏🏻
      </p>
      <p className="text-sm sm:text-base">Hey, I'm Maryam! Welcom to my</p>

      <h1 className="mt-7 relative">
        <span className="text-7xl sm:text-9xl italic block">portfolio</span>
        <span className="absolute top-5 -left-12 -rotate-12 bg-white/20 backdrop-blur-[3px] border border-white/50 p-2 rounded-lg text-[12px]">
          detail-oriented front-end developer
        </span>
      </h1>
    </section>
  );
}

export default Welcome;
