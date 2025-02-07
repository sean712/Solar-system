import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Planet from './Planet';
import { type PlanetName } from './Planet';

interface PlanetData {
  name: PlanetName;
  radius: number;
  textureUrl: string;
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;
}

const PLANET_DATA: PlanetData[] = [
  {
    name: 'Sun',
    radius: 2,
    textureUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004816/lroc_color_poles_1k.jpg',
    orbitRadius: 0,
    orbitSpeed: 0,
    rotationSpeed: 0.001
  },
  {
    name: 'Mercury',
    radius: 0.4,
    textureUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004851/mercury_1k_color.jpg',
    orbitRadius: 4,
    orbitSpeed: 0.04,
    rotationSpeed: 0.002
  },
  {
    name: 'Venus',
    radius: 0.6,
    textureUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004874/venus_1k.jpg',
    orbitRadius: 6,
    orbitSpeed: 0.015,
    rotationSpeed: 0.003
  },
  {
    name: 'Earth',
    radius: 0.6,
    textureUrl: 'https://eoimages.gsfc.nasa.gov/images/imagerecords/74000/74393/world.200412.3x5400x2700.jpg',
    orbitRadius: 8,
    orbitSpeed: 0.01,
    rotationSpeed: 0.002
  },
  {
    name: 'Mars',
    radius: 0.5,
    textureUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004831/mars_1k_color.jpg',
    orbitRadius: 10,
    orbitSpeed: 0.008,
    rotationSpeed: 0.002
  },
  {
    name: 'Jupiter',
    radius: 1.2,
    textureUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004841/jupiter_1k.jpg',
    orbitRadius: 14,
    orbitSpeed: 0.002,
    rotationSpeed: 0.004
  },
  {
    name: 'Saturn',
    radius: 1,
    textureUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004840/saturn_1k.jpg',
    orbitRadius: 18,
    orbitSpeed: 0.0009,
    rotationSpeed: 0.003
  },
  {
    name: 'Uranus',
    radius: 0.8,
    textureUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004839/uranus_1k.jpg',
    orbitRadius: 22,
    orbitSpeed: 0.0004,
    rotationSpeed: 0.003
  },
  {
    name: 'Neptune',
    radius: 0.8,
    textureUrl: 'https://svs.gsfc.nasa.gov/vis/a000000/a004800/a004838/neptune_1k.jpg',
    orbitRadius: 26,
    orbitSpeed: 0.0001,
    rotationSpeed: 0.002
  }
];

export default function SolarSystem() {
  return (
    <Canvas camera={{ position: [0, 20, 30], fov: 60 }}>
      <ambientLight intensity={1.0} />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#ffffff" />
      <pointLight position={[50, 50, 50]} intensity={0.5} />
      <pointLight position={[-50, -50, -50]} intensity={0.5} />
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