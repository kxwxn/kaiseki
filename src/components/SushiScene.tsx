"use client";

import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SushiModel from "./SushiModel";
import WavyText from "./WavyText";
import styles from "./SushiScene.module.css";

export default function SushiScene() {
  const [points, setPoints] = useState(0);

  const handleClick = () => {
    setPoints((prev) => prev + 1);
  };

  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} />
          <pointLight position={[0, 5, 0]} intensity={1} />
          <WavyText points={points} />
          <SushiModel onClick={handleClick} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
} 