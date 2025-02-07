import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface PlanetProps {
  position: [number, number, number];
  radius: number;
  textureUrl: string;
  name: string;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;
}

export default function Planet({
  position,
  radius,
  textureUrl,
  name,
  orbitRadius,
  orbitSpeed,
  rotationSpeed,
}: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<any>(null);
  
  const texture = useMemo(() => {
    return new THREE.TextureLoader().load(textureUrl);
  }, [textureUrl]);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Orbital movement
      const time = clock.getElapsedTime();
      meshRef.current.position.x = Math.cos(time * orbitSpeed) * orbitRadius;
      meshRef.current.position.z = Math.sin(time * orbitSpeed) * orbitRadius;
      
      // Planet rotation
      meshRef.current.rotation.y += rotationSpeed;
    }
    
    if (textRef.current) {
      textRef.current.position.x = meshRef.current?.position.x || 0;
      textRef.current.position.z = meshRef.current?.position.z || 0;
      textRef.current.position.y = (meshRef.current?.position.y || 0) + radius + 0.5;
      // Make text always face camera
      textRef.current.rotation.y = Math.atan2(
        (textRef.current.position.x),
        (textRef.current.position.z)
      );
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Text
        ref={textRef}
        position={[position[0], position[1] + radius + 0.5, position[2]]}
        fontSize={0.5}
        color="white"
      >
        {name}
      </Text>
    </>
  );
}