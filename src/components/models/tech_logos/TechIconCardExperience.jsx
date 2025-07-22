import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  const isLowEnd =
    navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4;

  return (
    <Canvas dpr={[1, 1.5]}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
      />
      <Environment preset="sunset" />

      {!isLowEnd ? (
        <Float speed={3.5} rotationIntensity={0.4} floatIntensity={0.5}>
          <group
            scale={model.scale}
            rotation={model.rotation}
            position={model.position}
          >
            <primitive object={scene.scene} />
          </group>
        </Float>
      ) : (
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={model.position}
        >
          <primitive object={scene.scene} />
        </group>
      )}

      <OrbitControls enableZoom={false} enableDamping={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
