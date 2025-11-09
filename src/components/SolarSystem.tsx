import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

const Sun = () => {
  return (
    <Sphere args={[2, 32, 32]} position={[0, 0, 0]}>
      <meshStandardMaterial
        emissive="#FDB813"
        emissiveIntensity={2}
        color="#FDB813"
      />
      <pointLight intensity={2} distance={100} />
    </Sphere>
  );
};

interface PlanetProps {
  size: number;
  color: string;
  distance: number;
  speed: number;
}

const Planet = ({ size, color, distance, speed }: PlanetProps) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += speed;
    }
  });

  return (
    <group ref={orbitRef}>
      <Sphere ref={planetRef} args={[size, 32, 32]} position={[distance, 0, 0]}>
        <meshStandardMaterial color={color} />
      </Sphere>
    </group>
  );
};

const SolarSystem = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas camera={{ position: [0, 10, 30], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <Sun />
        <Planet size={0.4} color="#8B7355" distance={4} speed={0.02} /> {/* Mercury */}
        <Planet size={0.7} color="#FFC649" distance={6} speed={0.015} /> {/* Venus */}
        <Planet size={0.8} color="#4A90E2" distance={8} speed={0.01} /> {/* Earth */}
        <Planet size={0.6} color="#E27B58" distance={10} speed={0.008} /> {/* Mars */}
        <Planet size={1.5} color="#C88B3A" distance={14} speed={0.005} /> {/* Jupiter */}
        <Planet size={1.2} color="#FAD5A5" distance={18} speed={0.003} /> {/* Saturn */}
        <Planet size={0.9} color="#4FD0E7" distance={22} speed={0.002} /> {/* Uranus */}
        <Planet size={0.9} color="#4166F5" distance={26} speed={0.001} /> {/* Neptune */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default SolarSystem;
