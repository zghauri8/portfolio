import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Button = ({ text, className }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");

        if (target) {
          const offset = window.innerHeight * 0.15;

          const targetPosition =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          gsap.to(window, {
            scrollTo: { y: targetPosition, autoKill: false },
            duration: 1.5,
            ease: "power2.inOut",
          });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
