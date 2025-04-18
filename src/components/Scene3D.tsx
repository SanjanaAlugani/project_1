import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center, Float, Stars, useTexture, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    meshRef.current.rotation.y += 0.01;
    meshRef.current.scale.setScalar(hovered ? 1.2 : 1);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? "#60a5fa" : "#4299e1"}
          roughness={0.1}
          metalness={0.9}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingText() {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef<THREE.Mesh>(null!);
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    if (hovered) {
      const interval = setInterval(() => {
        setRotation((prev) => prev + Math.PI / 32);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [hovered]);

  useFrame((state) => {
    textRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 + 0.1;
    if (!hovered) {
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    } else {
      textRef.current.rotation.y = rotation;
    }
  });

  return (
    <Center ref={textRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={8}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          SA
          <meshStandardMaterial 
            color={hovered ? "#60a5fa" : "#2563eb"}
            roughness={0.1}
            metalness={0.9}
            emissive={hovered ? "#60a5fa" : "#000000"}
            emissiveIntensity={hovered ? 0.5 : 0}
          />
        </Text3D>
      </Float>
    </Center>
  );
}

function BackgroundParticles() {
  const particlesRef = useRef<THREE.Points>(null!);
  const count = 2000;
  const [positions] = useState(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  });

  useFrame((state) => {
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#60a5fa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#000']} />
        <fog attach="fog" args={['#000', 5, 15]} />
        <BackgroundParticles />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight 
          position={[-10, -10, -10]} 
          angle={0.15} 
          penumbra={1}
          intensity={2}
          color="#60a5fa"
        />
        <AnimatedSphere />
        <FloatingText />
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI - Math.PI / 4}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}