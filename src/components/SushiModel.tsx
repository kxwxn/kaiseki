import { useRef, useState } from "react";
import { useFrame, ThreeEvent, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function SushiModel({ onClick }: { onClick: () => void }) {
  const { scene } = useGLTF("/models/sushi_voxel_art.glb");
  const modelRef = useRef<THREE.Group>(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const spinDuration = 0.5;
  const spinStartTime = useRef(0);
  const { clock } = useThree();

  useFrame((state, delta) => {
    if (modelRef.current) {
      // 부드러운 위아래 움직임
      const time = clock.getElapsedTime();
      modelRef.current.position.y = Math.sin(time * 2) * 0.1;

      // 클릭 시 회전 애니메이션
      if (isSpinning) {
        const currentTime = clock.getElapsedTime();
        const elapsedTime = currentTime - spinStartTime.current;
        if (elapsedTime < spinDuration) {
          modelRef.current.rotation.y += delta * 10;
        } else {
          setIsSpinning(false);
        }
      }
    }
  });

  const handleModelClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    onClick();
    setIsSpinning(true);
    spinStartTime.current = clock.getElapsedTime();
  };

  return (
    <group
      ref={modelRef}
      position={[0, -1.5, 0]}
      rotation={[Math.PI / 6, Math.PI / 4, 0]}
      onClick={handleModelClick}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto';
      }}
    >
      <primitive object={scene} scale={1} />
    </group>
  );
} 