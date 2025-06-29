import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex items-center justify-center marquee-item px-3 md:px-5">
      <img
        src={icon.imgPath}
        alt={icon.name}
        className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain grayscale opacity-80"
      />
    </div>
  );
}; 

const LogoShowcase = () => (
  <div className="mt-0.5 sm:mt-6 md:mt-10 lg:mt-3 xl:mt-14 mb-16 my-10 sm:my-12 md:my-14 lg:my-16 xl:my-20 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-20 sm:h-24 md:h-28 lg:h-32">
      <div className="marquee-box flex items-center gap-5 sm:gap-8 md:gap-10 lg:gap-12">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
  
);



export default LogoShowcase;