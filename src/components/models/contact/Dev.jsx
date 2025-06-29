// import React, { useRef, useEffect } from "react";
// import { useGLTF, useFBX, useAnimations } from "@react-three/drei";

// const Dev = ({ animationName = "Idle", ...props }) => {
//   const group = useRef();

//   // Load character model
//   const { nodes, materials, scene } = useGLTF("/models/ffs.glb");

//   // Load Mixamo animation
// //   const { animations: idleAnimations } = useFBX("/models/SleepingIdle.fbx");

//   // Rename animation so it's easier to reference
//   idleAnimations[0].name = "Idle";

//   // Hook up animations
//   const { actions } = useAnimations(idleAnimations, group);

//   // Play animation
//   useEffect(() => {
//     if (actions[animationName]) {
//       actions[animationName].reset().fadeIn(0.5).play();
//     }

//     return () => {
//       if (actions[animationName]) {
//         actions[animationName].fadeOut(0.5);
//       }
//     };
//   }, [actions, animationName]);

//   return (
//     <group
//       ref={group}
//       {...props}
//       scale={[0.05, 0.05, 0.05]}
//       position={[0, -1, 0]}
//       rotation={[0, Math.PI, 0]}
//       dispose={null}
//     >
//       {/* Character's main skeleton anchor */}
//       <primitive object={scene} />
//     </group>
//   );
// };

// // ✅ Preload GLB to avoid flicker
// useGLTF.preload("/models/685dad6ece6b397456bf1faf.glb");

// export default Dev;