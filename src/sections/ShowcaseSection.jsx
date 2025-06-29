
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="work"
      ref={sectionRef}
      className="app-showcase w-full px-4 md:px-16 py-20"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Main Project */}
        <div
          ref={rydeRef}
          className="md:w-1/2 flex flex-col gap-4 justify-center"
        >
          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/project1.png"
              alt="Ryde App Interface"
              className="w-full object-cover"
              link="https://g-arena-jrez.vercel.app" // Add link to the image
              style={{ cursor: "pointer" }} // Make the image clickable
              onClick={() => window.open("https://g-arena-jrez.vercel.app", "_blank")}
            />
          </div>
          <h2 className="text-2xl md:text-xl font-bold">
            On-Demand Rides Made Simple with a Powerful, User-Friendly App called GoXpress.
          </h2>
          <p className="text-white-50 md:text-xs">
            An app built with React JS, MongoDB & TailwindCSS for a fast, user-friendly experience.
          </p>
        </div>

        {/* Right: Other Projects */}
        <div className="md:w-1/2 flex flex-col gap-10 justify-between">
          {/* Project 2 */}
          <div
            ref={libraryRef}
            className="rounded-xl overflow-hidden"
          >
            {/* Crop background behind image only */}
            <div className="bg-[#FFEFDB] rounded-t-xl overflow-hidden">
              <img
                src="/images/gaming.png"
                alt="Gaming Arena"
                className="w-full"
                link="https://g-arena-jrez.vercel.app" // Add link to the image
                style={{ cursor: "pointer" }} // Make the image clickable
                onClick={() => window.open("https://g-arena-jrez.vercel.app", "_blank")} //
              />
            </div>

            {/* Heading will be outside and won't overlap */}
            <h2 className="text-xl font-semibold mt-4 text-white text-center">
              E - Games Store
            </h2>
          </div>

          {/* Project 3 */}
          <div
            ref={ycDirectoryRef}
            className="rounded-xl overflow-hidden"
          >
            <div className="bg-[#FFE7EB] rounded-t-xl overflow-hidden">
              <img
                src="/images/rental.png"
                alt="Rental App"
                className="w-full"
                link="https://g-arena-jrez.vercel.app" // Add link to the image
                style={{ cursor: "pointer" }} // Make the image clickable
                onClick={() => window.open("https://g-arena-jrez.vercel.app", "_blank")}
              />
            </div>

            <h2 className="text-xl font-semibold mt-4 text-white text-center">
              RENTFIUL - A NextJS Rental Platform
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
