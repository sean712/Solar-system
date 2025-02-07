import React from 'react';
import SolarSystem from './components/SolarSystem';
import { Info } from 'lucide-react';

function App() {
  return (
    <div className="w-full h-screen bg-black relative">
      <SolarSystem />
      
      <div className="absolute top-4 left-4 bg-black/50 text-white p-4 rounded-lg backdrop-blur-sm max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <Info size={20} />
          <h1 className="text-xl font-bold">Interactive Solar System</h1>
        </div>
        <div className="text-sm opacity-80">
          <p className="mb-2">Use your mouse to explore the solar system:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Left click + drag to rotate</li>
            <li>Right click + drag to pan</li>
            <li>Scroll to zoom in/out</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
