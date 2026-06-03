import React from "react";

function AboutMe() {
  return (
    <div className="px-5 py-4 space-y-5">
      <div className="w-18 h-18 rounded-full bg-purple-500"></div>
      <h2 className="font-semibold">Meet the Developer Behind the Code</h2>
      <p className="*:block space-y-5 text-sm">
        <span>
          Hey! I’m Maryam 👋, a Frontend web developer who enjoys building
          sleek, interactive websites that actually work well.
        </span>
        <span>
          I specialize in JavaScript and React I love making things feel smooth,
          fast, and just a little bit delightful.
        </span>
        <span>
          I’m big on clean UI, good UX, and writing code that doesn’t need a
          search party to debug.
        </span>
        <span>
          Outside of dev work, you'll find me tweaking layouts at 2AM, sipping
          overpriced coffee, or impulse-buying gadgets I absolutely convinced
          myself I needed 😅
        </span>
      </p>
    </div>
  );
}

export default AboutMe;
