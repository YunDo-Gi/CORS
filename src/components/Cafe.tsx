import React from 'react';
import { ThreeElements } from '@react-three/fiber';

export function Cafe(props: ThreeElements['group']) {
  return (
    <group {...props}>
      {/* Floor */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color={'#f0e6d2'} />
      </mesh>

      {/* Walls */}
      <mesh position={[-3, 1.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color={'#e6d8c3'} />
      </mesh>
      <mesh position={[0, 1.5, -3]}>
        <planeGeometry args={[6, 4]} />
        <meshStandardMaterial color={'#e6d8c3'} />
      </mesh>

      {/* Counter */}
      <mesh position={[-2, 0.5, -2]}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color={'#a0522d'} />
      </mesh>

      {/* Brewing Station */}
      <mesh position={[2, 0.5, -2.5]}>
        <boxGeometry args={[1.5, 1, 0.8]} />
        <meshStandardMaterial color={'#778899'} />
      </mesh>

      {/* Bean Display */}
      <mesh position={[2.5, 1, 2]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
        <meshStandardMaterial color={'#3c1f1e'} />
      </mesh>
    </group>
  );
}