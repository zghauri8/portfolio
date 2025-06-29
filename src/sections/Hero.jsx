
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter.jsx";
import Button from "../components/Button.jsx";
import { words } from "../constants";
import HeroExperience from "../components/models/Heromodels/HeroExperience.jsx";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <>
      <section id="hero" className="relative overflow-hidden w-full h-screen">
        <div className="absolute top-0 left-0 z-10">
          <img src="/images/bg.png" alt="" />
        </div>

        <div className="hero-layout">
          {/* LEFT: Hero Content */}
          <header className="flex flex-col justify-center gap-6 w-full md:w-1/2">
            <div className="flex flex-col gap-7">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={index}
                          className="flex items-center md:gap-3 gap-1 pb-2"
                        >
                          <img
                            src={word.imgPath}
                            alt="person"
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>
                <h1>into Real Projects</h1>
                <h1>that Deliver Results</h1>
              </div>

              <p className="text-white-50 text-xs md:text-base">
                Hi, I'm Zohaib, a Full Stack Developer with a passion for code.
              </p>

              <Button
                text="See My Work"
                className="w-60 h-14 md:w-72 md:h-16 text-base md:text-lg"
              />
            </div>
          </header>

          {/* RIGHT: 3D Model or Visual */}
          <figure className="w-full md:w-1/2 flex justify-center items-center">
            <div className="hero-3d-layout">
              <HeroExperience />
            </div>
          </figure>
        </div>
      </section>

      {/* ✅ Properly placed outside the Hero */}
      <AnimatedCounter />
    </>
  );
};

export default Hero;
