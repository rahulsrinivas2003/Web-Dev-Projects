import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const SparkleParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const count = 44;

  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      values[i * 3] = (Math.random() - 0.5) * 6;
      values[i * 3 + 1] = (Math.random() - 0.5) * 6;
      values[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return values;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="hsl(174, 62%, 55%)" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
};

const DoctorCoat = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  const coatMat = { color: "hsl(0, 0%, 97%)", roughness: 0.4, metalness: 0.0, clearcoat: 0.3 };
  const shirtMat = { color: "hsl(200, 60%, 55%)", roughness: 0.5, metalness: 0.05 };
  const metalMat = { color: "hsl(0, 0%, 75%)", roughness: 0.1, metalness: 0.95 };
  const rubberMat = { color: "hsl(0, 0%, 15%)", roughness: 0.6, metalness: 0.0 };

  return (
    <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Torso / coat body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.55, 0.7, 1.8, 24]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>

        {/* Coat collar - left */}
        <mesh position={[-0.25, 0.85, 0.3]} rotation={[0.3, 0.2, 0.15]}>
          <boxGeometry args={[0.35, 0.35, 0.06]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>
        {/* Coat collar - right */}
        <mesh position={[0.25, 0.85, 0.3]} rotation={[0.3, -0.2, -0.15]}>
          <boxGeometry args={[0.35, 0.35, 0.06]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>

        {/* Shirt / inner visible at collar */}
        <mesh position={[0, 0.7, 0.25]}>
          <boxGeometry args={[0.3, 0.3, 0.1]} />
          <meshPhysicalMaterial {...shirtMat} />
        </mesh>

        {/* Left shoulder */}
        <mesh position={[-0.65, 0.55, 0]} rotation={[0, 0, -0.2]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>
        {/* Right shoulder */}
        <mesh position={[0.65, 0.55, 0]} rotation={[0, 0, 0.2]}>
          <sphereGeometry args={[0.22, 16, 16]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>

        {/* Left sleeve */}
        <mesh position={[-0.75, 0.05, 0]} rotation={[0, 0, 0.1]}>
          <cylinderGeometry args={[0.18, 0.16, 0.9, 16]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>
        {/* Right sleeve */}
        <mesh position={[0.75, 0.05, 0]} rotation={[0, 0, -0.1]}>
          <cylinderGeometry args={[0.18, 0.16, 0.9, 16]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>

        {/* Coat bottom flare - left */}
        <mesh position={[-0.2, -1.1, 0]}>
          <cylinderGeometry args={[0.35, 0.4, 0.5, 16]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>
        {/* Coat bottom flare - right */}
        <mesh position={[0.2, -1.1, 0]}>
          <cylinderGeometry args={[0.35, 0.4, 0.5, 16]} />
          <meshPhysicalMaterial {...coatMat} />
        </mesh>

        {/* Pocket - left */}
        <mesh position={[-0.3, -0.15, 0.52]}>
          <boxGeometry args={[0.25, 0.2, 0.02]} />
          <meshPhysicalMaterial color="hsl(0, 0%, 92%)" roughness={0.5} />
        </mesh>
        {/* Pocket - right */}
        <mesh position={[0.3, -0.15, 0.52]}>
          <boxGeometry args={[0.25, 0.2, 0.02]} />
          <meshPhysicalMaterial color="hsl(0, 0%, 92%)" roughness={0.5} />
        </mesh>

        {/* Buttons */}
        {[-0.05, -0.3, -0.55].map((y, i) => (
          <mesh key={i} position={[0, y, 0.56]}>
            <cylinderGeometry args={[0.03, 0.03, 0.02, 12]} />
            <meshPhysicalMaterial color="hsl(0, 0%, 85%)" metalness={0.3} roughness={0.3} />
          </mesh>
        ))}

        {/* === Stethoscope === */}
        {/* Chest piece (diaphragm) */}
        <mesh position={[0.15, 0.2, 0.58]}>
          <cylinderGeometry args={[0.08, 0.08, 0.03, 24]} />
          <meshPhysicalMaterial {...metalMat} />
        </mesh>
        <mesh position={[0.15, 0.2, 0.6]}>
          <cylinderGeometry args={[0.06, 0.06, 0.02, 24]} />
          <meshPhysicalMaterial color="hsl(0, 0%, 30%)" roughness={0.4} />
        </mesh>

        {/* Tubing - draped over neck, going down to chest piece */}
        <mesh position={[-0.15, 0.75, 0.4]} rotation={[0.5, 0, -0.3]}>
          <torusGeometry args={[0.35, 0.025, 8, 32, Math.PI]} />
          <meshPhysicalMaterial {...rubberMat} />
        </mesh>
        {/* Left tube hanging */}
        <mesh position={[-0.35, 0.5, 0.35]} rotation={[0.2, 0, 0.4]}>
          <cylinderGeometry args={[0.025, 0.025, 0.5, 8]} />
          <meshPhysicalMaterial {...rubberMat} />
        </mesh>
        {/* Right tube down to chest piece */}
        <mesh position={[0.1, 0.45, 0.5]} rotation={[0.15, 0, -0.15]}>
          <cylinderGeometry args={[0.025, 0.025, 0.5, 8]} />
          <meshPhysicalMaterial {...rubberMat} />
        </mesh>

        {/* Earpiece connectors at top */}
        <mesh position={[-0.35, 0.85, 0.25]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshPhysicalMaterial {...metalMat} />
        </mesh>
        <mesh position={[0.05, 0.85, 0.25]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshPhysicalMaterial {...metalMat} />
        </mesh>
      </group>
    </Float>
  );
};

const Scene = () => (
  <>
    <ambientLight intensity={0.55} />
    <directionalLight position={[5, 5, 5]} intensity={1.05} color="white" />
    <directionalLight position={[-3, 3, -3]} intensity={0.36} color="hsl(174, 62%, 72%)" />
    <pointLight position={[0, 2, 3]} intensity={0.62} color="hsl(174, 62%, 60%)" />
    <DoctorCoat />
    <SparkleParticles />
    <ContactShadows position={[0, -2, 0]} opacity={0.28} scale={8} blur={2.4} far={4} />
    <Environment preset="studio" />
  </>
);

const DentalScene3D = () => (
  <div className="h-[500px] w-full">
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  </div>
);

export default DentalScene3D;
