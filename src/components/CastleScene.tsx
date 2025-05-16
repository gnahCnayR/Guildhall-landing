'use client'

import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise, Pixelation } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Suspense } from "react";
import Castle from "./Castle";

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="white" wireframe />
    </mesh>
  );
}

export default function CastleScene() {
  return (
    <div className="relative w-full h-screen">
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 2, 10]
        }}
      >
        <color attach="background" args={["#0a0a0a"]} />

        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight 
          position={[-5, 5, -5]} 
          intensity={0.5}
        />

        <Suspense fallback={<LoadingFallback />}>
          <Castle />
        </Suspense>

        <EffectComposer>
          <Noise
            opacity={0.2}
            blendFunction={BlendFunction.OVERLAY}
          />
          <Pixelation
            granularity={8.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}