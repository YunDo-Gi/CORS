import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Cafe } from "./components/Cafe";
import { CameraAnimation } from "./components/CameraAnimation";
import "./App.css";

export default function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Canvas camera={{ position: [10, 5, 10], fov: 50 }}>
        <CameraAnimation />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cafe position={[0, 0, 0]} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.5}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
}
