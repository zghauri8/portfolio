import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Extract numeric value without suffix
      const numericValue = parseInt(item.value, 10);
      const suffix = item.suffix || "";

      // Set starting value
      gsap.set(numberElement, { innerText: 0 });

      // Animate innerText without suffix
      gsap.to(numberElement, {
        innerText: numericValue,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: "#counter",
          start: "top 80%",
        },
        onUpdate: function () {
          numberElement.textContent = `${Math.floor(this.targets()[0].innerText)}${suffix}`;
        },
      });
    });
  }, []);

  return (
    <div id="counter" ref={counterRef} className="px-6 md:px-14 xl:mt-0 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900 rounded-xl px-5 py-8 min-w-[250px] h-[110px] flex flex-col justify-center shadow-md"
          >
            <div className="counter-number text-white text-3xl font-bold mb-2">
              0
            </div>
            <div className="text-white text-base opacity-70">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;