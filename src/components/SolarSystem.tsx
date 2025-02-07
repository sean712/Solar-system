import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';

const PLANET_DATA = [
  {
    name: 'Sun',
    radius: 2,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/sun.jpg',
    orbitRadius: 0,
    orbitSpeed: 0,
    rotationSpeed: 0.001
  },
  {
    name: 'Mercury',
    radius: 0.4,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mercury.jpg',
    orbitRadius: 4,
    orbitSpeed: 0.04,
    rotationSpeed: 0.002
  },
  {
    name: 'Venus',
    radius: 0.6,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/venus.jpg',
    orbitRadius: 6,
    orbitSpeed: 0.015,
    rotationSpeed: 0.003
  },
  {
    name: 'Earth',
    radius: 0.6,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth.jpg',
    orbitRadius: 8,
    orbitSpeed: 0.01,
    rotationSpeed: 0.002
  },
  {
    name: 'Mars',
    radius: 0.5,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/mars.jpg',
    orbitRadius: 10,
    orbitSpeed: 0.008,
    rotationSpeed: 0.002
  },
  {
    name: 'Jupiter',
    radius: 1.2,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/jupiter.jpg',
    orbitRadius: 14,
    orbitSpeed: 0.002,
    rotationSpeed: 0.004
  },
  {
    name: 'Saturn',
    radius: 1,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/saturn.jpg',
    orbitRadius: 18,
    orbitSpeed: 0.0009,
    rotationSpeed: 0.003
  },
  {
    name: 'Uranus',
    radius: 0.8,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/uranus.jpg',
    orbitRadius: 22,
    orbitSpeed: 0.0004,
    rotationSpeed: 0.003
  },
  {
    name: 'Neptune',
    radius: 0.8,
    textureUrl: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/neptune.jpg',
    orbitRadius: 26,
    orbitSpeed: 0.0001,
    rotationSpeed: 0.002
  }
];

export default function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 30], fov: 60 }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 0, 0]} intensity={5} color="#fff" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {PLANET_DATA.map((planet) => (
        <Planet
          key={planet.name}
          position={[planet.orbitRadius, 0, 0]}
          radius={planet.radius}
          textureUrl={planet.textureUrl}
          name={planet.name}
          orbitRadius={planet.orbitRadius}
          orbitSpeed={planet.orbitSpeed}
          rotationSpeed={planet.rotationSpeed}
        />
      ))}
      
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={100}
      />
    </Canvas>
  );
}