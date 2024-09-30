import React, { useState } from 'react';
import { ThreeElements } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { cafeInfo } from '../data/cafeInfo';
import InfoDisplay from './InfoDisplay';

export function Cafe(props: ThreeElements['group']) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [displayInfo, setDisplayInfo] = useState<string | null>(null);

  const handlePointerOver = (object: string) => setHovered(object);
  const handlePointerOut = () => setHovered(null);
  const handleClick = (object: string) => {
    switch (object) {
      case 'counter':
        setDisplayInfo(cafeInfo.menu.map(item => `${item.item}: $${item.price}`).join('\n'));
        break;
      case 'brewingStation':
        setDisplayInfo(cafeInfo.brewingRecipe);
        break;
      case 'beanDisplay':
        setDisplayInfo(`${cafeInfo.coffeeBean.name}\nOrigin: ${cafeInfo.coffeeBean.origin}\nFlavor: ${cafeInfo.coffeeBean.flavor}`);
        break;
      default:
        setDisplayInfo(null);
    }
  };

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
      <mesh 
        position={[-2, 0.5, -2]} 
        onPointerOver={() => handlePointerOver('counter')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('counter')}
      >
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color={hovered === 'counter' ? '#8b4513' : '#a0522d'} />
      </mesh>

      {/* Brewing Station */}
      <mesh 
        position={[2, 0.5, -2.5]}
        onPointerOver={() => handlePointerOver('brewingStation')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('brewingStation')}
      >
        <boxGeometry args={[1.5, 1, 0.8]} />
        <meshStandardMaterial color={hovered === 'brewingStation' ? '#708090' : '#778899'} />
      </mesh>

      {/* Bean Display */}
      <mesh 
        position={[2.5, 1, 2]}
        onPointerOver={() => handlePointerOver('beanDisplay')}
        onPointerOut={handlePointerOut}
        onClick={() => handleClick('beanDisplay')}
      >
        <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
        <meshStandardMaterial color={hovered === 'beanDisplay' ? '#4a2c2a' : '#3c1f1e'} />
      </mesh>

      {displayInfo && (
        <InfoDisplay info={displayInfo} onClose={() => setDisplayInfo(null)} />
      )}

      {hovered && (
        <Text
          position={[0, 2, 0]}
          rotation={[0, Math.PI / 4, 0]}
          color="white"
          fontSize={0.2}
          maxWidth={2}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          anchorX="center"
          anchorY="middle"
        >
          {`Click to see ${hovered} info`}
        </Text>
      )}
    </group>
  );
}