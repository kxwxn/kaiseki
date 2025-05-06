import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

export default function WavyText({ points }: { points: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const mesh = meshRef.current;
    if (mesh) {
      const time = clock.getElapsedTime();
      const position = (mesh.geometry as THREE.BufferGeometry).attributes.position;
      const count = position.count;

      for (let i = 0; i < count; i++) {
        const x = position.getX(i);
        // y좌표를 기준으로 x를 진동시키기 (물결효과)
        const wave = Math.sin(x * 2 + time * 3) * 0.2;
        position.setZ(i, wave);
      }
      position.needsUpdate = true;
    }
  });

  return (
    <Text
      ref={meshRef}
      fontSize={0.3}
      color="#00ff00"
      position={[0, 4, 0]}
      anchorX="center"
      anchorY="middle"
    >
      {`Point: ${points}`}
    </Text>
  );
} 