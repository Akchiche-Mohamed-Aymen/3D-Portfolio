import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  // Replace 'path-to-your-file.gltf' with the actual path to your GLTF file
  const { scene } = useGLTF("./assets/desktop_pc/scene.gltf");
  return <primitive object={scene} />;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
}