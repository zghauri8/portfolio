import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { LoopRepeat } from "three";

const SleepingDev = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("/models/Final.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || animations.length === 0) return;

    const action = actions[animations[0].name];
    if (action) {
      action.reset();
      action.setLoop(LoopRepeat, Infinity);
      action.play();
    }
  }, [actions, animations]);

  useEffect(() => {
    if (!scene) return;

    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true;
        obj.receiveShadow = true;
      }
    });
  }, [scene]);

  return (
    <group
      ref={group}
      scale={[1, 1, 1]} // Slightly larger for zoomed-in effect
      position={[0, -1.3, 0]}    // Adjust for floor alignment
      rotation={[0, Math.PI + 1.4, 0]} // Face camera
    >
      <primitive object={scene} />
    </group>
  );
};

export default SleepingDev;
