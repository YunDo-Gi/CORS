import { Canvas } from "@react-three/fiber";
import { Cafe } from "./components/Cafe";
import { OrbitControls } from "@react-three/drei";
import { CameraAnimation } from "./components/CameraAnimation";
import "./App.css";

export default function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Canvas camera={{ position: [5, 5, 15], fov: 50 }}>
        <CameraAnimation />
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <Cafe position={[0, -2, 0]} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
