import { useState, useEffect, useRef } from "react";
import { ThreeElements, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// 원두 정보 타입 정의
interface CoffeeBean {
  name: string;
  description: string;
  price: string;
}

// 원두 데이터
const coffeeBeans: CoffeeBean[] = [
  {
    name: "에티오피아 예가체프",
    description: "꽃향과 감귤류의 산미가 특징인 원두",
    price: "18,000원/200g"
  },
  {
    name: "과테말라 안티구아",
    description: "초콜릿과 견과류의 고소함이 특징인 원두",
    price: "20,000원/200g"
  },
  {
    name: "케냐 AA",
    description: "와인같은 산미와 베리향이 특징인 원두",
    price: "22,000원/200g"
  }
];

// 메뉴 정보 타입 정의
interface MenuItem {
  name: string;
  description: string;
  price: string;
}

// 메뉴 데이터
const menuItems: MenuItem[] = [
  {
    name: "아메리카노",
    description: "에스프레소와 물의 깔끔한 조화",
    price: "4,500원"
  },
  {
    name: "카페라떼",
    description: "에스프레소와 스팀밀크의 부드러운 조화",
    price: "5,000원"
  },
  {
    name: "바닐라라떼",
    description: "바닐라 시럽이 들어간 달콤한 라떼",
    price: "5,500원"
  }
];

export function Cafe(props: ThreeElements["group"]) {
  const gltf = useLoader(GLTFLoader, "/cafe.glb");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const grinderRef = useRef<THREE.Object3D>();
  const machineRef = useRef<THREE.Object3D>();
  const cubeRef = useRef<THREE.Object3D>();
  const menuRef = useRef<THREE.Object3D>();

  useEffect(() => {
    gltf.scene.traverse((object) => {
      const objectName = object.name.toLowerCase();
      if (objectName.includes('grinder')) {
        grinderRef.current = object;
      }
      if (objectName.includes('machine')) {
        machineRef.current = object;
      }
      if (objectName.includes('rack')) {
        cubeRef.current = object;
      }
      if (objectName.includes('menu')) {
        menuRef.current = object;
        console.log('Found menu:', object.name, object.position);
      }
    });
  }, [gltf]);

  const handlePointerOver = (itemName: string) => {
    setHoveredItem(itemName);
    document.body.style.cursor = 'pointer';
  };

  const handlePointerOut = () => {
    setHoveredItem(null);
    document.body.style.cursor = 'auto';
  };

  return (
    <group {...props}>
      <primitive object={gltf.scene} />
      
      {/* Grinder Hover UI */}
      {grinderRef.current && (
        <mesh
          position={[
            grinderRef.current.position.x - 3.5,
            grinderRef.current.position.y + 3,
            grinderRef.current.position.z + 0.5
          ]}
          onPointerOver={(e) => {
            e.stopPropagation();
            handlePointerOver('grinder');
          }}
          onPointerOut={handlePointerOut}
          visible={false}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial transparent opacity={0} />
          {hoveredItem === 'grinder' && (
            <Html
              position={[0, 2, 0]}
              style={{
                transform: 'translate3d(-50%, -50%, 0)',
                background: 'white',
                padding: '10px',
                borderRadius: '5px',
                whiteSpace: 'nowrap'
              }}
            >
              <div>
                <h3>그라인더</h3>
                <p>커피 원두를 갈아주는 장비입니다.</p>
              </div>
            </Html>
          )}
        </mesh>
      )}

      {/* Machine Hover UI */}
      {machineRef.current && (
        <mesh
          position={[
            machineRef.current.position.x,
            machineRef.current.position.y,
            machineRef.current.position.z
          ]}
          onPointerOver={(e) => {
            e.stopPropagation();
            handlePointerOver('machine');
          }}
          onPointerOut={handlePointerOut}
          visible={false}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial transparent opacity={0} />
          {hoveredItem === 'machine' && (
            <Html
              position={[0, 2, 0]}
              style={{
                transform: 'translate3d(-50%, -50%, 0)',
                background: 'white',
                padding: '10px',
                borderRadius: '5px',
                whiteSpace: 'nowrap'
              }}
            >
              <div>
                <h3>에스프레소 머신</h3>
                <p>커피를 추출하는 머신입니다.</p>
              </div>
            </Html>
          )}
        </mesh>
      )}

      {/* Cube(Rack) Hover UI */}
      {cubeRef.current && (
        <mesh
          position={[
            cubeRef.current.position.x,
            cubeRef.current.position.y - 0.5,
            cubeRef.current.position.z
          ]}
          onPointerOver={(e) => {
            e.stopPropagation();
            handlePointerOver('cube');
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            handlePointerOut();
          }}
          visible={false}
        >
          <boxGeometry args={[1, 2, 1]} />
          <meshBasicMaterial transparent opacity={0} />
          {hoveredItem === 'cube' && (
            <Html
              position={[0, 3, 0]}
              style={{
                transform: 'translate3d(-50%, -50%, 0)',
                background: 'white',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                width: '600px',
                pointerEvents: 'none'
              }}
            >
              <div className="coffee-menu" style={{ fontSize: '0.9rem' }}>
                <h3 className="text-lg font-bold mb-3">판매 원두</h3>
                <div style={{ 
                  display: 'flex', 
                  gap: '20px',
                  justifyContent: 'space-between'
                }}>
                  {coffeeBeans.map((bean, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        flex: '1',
                        padding: '10px',
                        borderRight: index !== coffeeBeans.length - 1 ? '1px solid #eee' : 'none'
                      }}
                    >
                      <h4 className="font-bold text-base mb-2">{bean.name}</h4>
                      <p className="text-gray-600 text-xs mb-2">{bean.description}</p>
                      <p className="text-blue-600 text-sm">{bean.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Html>
          )}
        </mesh>
      )}

      {/* Menu Hover UI */}
      {menuRef.current && (
        <mesh
          position={[
            menuRef.current.position.x,
            menuRef.current.position.y,
            menuRef.current.position.z
          ]}
          onPointerOver={(e) => {
            e.stopPropagation();
            handlePointerOver('menu');
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            handlePointerOut();
          }}
          visible={false}
        >
          <boxGeometry args={[0.5, 1, 0.2]} />
          <meshBasicMaterial transparent opacity={0} />
          {hoveredItem === 'menu' && (
            <Html
              position={[0, 2, 0]}
              style={{
                transform: 'translate3d(-50%, -50%, 0)',
                background: 'white',
                padding: '15px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                width: '600px',
                pointerEvents: 'none'
              }}
            >
              <div className="menu-items" style={{ fontSize: '0.9rem' }}>
                <h3 className="text-lg font-bold mb-3">카페 메뉴</h3>
                <div style={{ 
                  display: 'flex', 
                  gap: '20px',
                  justifyContent: 'space-between'
                }}>
                  {menuItems.map((item, index) => (
                    <div 
                      key={index} 
                      style={{ 
                        flex: '1',
                        padding: '10px',
                        borderRight: index !== menuItems.length - 1 ? '1px solid #eee' : 'none'
                      }}
                    >
                      <h4 className="font-bold text-base mb-2">{item.name}</h4>
                      <p className="text-gray-600 text-xs mb-2">{item.description}</p>
                      <p className="text-blue-600 text-sm">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Html>
          )}
        </mesh>
      )}
    </group>
  );
}
