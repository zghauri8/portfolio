import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });      // Phones
  const isTablet = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1024px)' }); // Tablets
  const isLaptop = useMediaQuery({ query: '(min-width: 1025px) and (max-width: 1440px)' }); // Standard laptops
  const isDesktop = useMediaQuery({ query: '(min-width: 1441px)' });   // Larger screens

  let scale = 0.7;
  let positionY = -2.6;

  if (isTablet) {
    scale = 0.85;
    positionY = -2.2;
  } else if (isLaptop) {
    scale = 1.2;
    positionY = -2.5;
  } else if (isDesktop) {
    scale = 1.15;
    positionY = -2;
  } else if (isMobile) {
    scale = 1.5;
    positionY = -6;
  }

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
      {/* deep blue ambient */}
      <ambientLight intensity={0.2} color="#1a1a40" />
      {/* Configure OrbitControls to disable panning and control zoom based on device type */}
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={!isTablet} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
      />

      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          scale={scale}
        position={[0, positionY, 0]}
        rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;