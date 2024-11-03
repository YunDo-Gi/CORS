import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CameraAnimation() {
  const cameraRef = useRef<THREE.Camera>();

  useFrame(({ clock }) => {
    if (cameraRef.current) {
      const t = clock.getElapsedTime();
      cameraRef.current.position.x = Math.sin(t * 0.01) * 10;
      cameraRef.current.position.z = Math.cos(t * 0.01) * 10;
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return null;
}