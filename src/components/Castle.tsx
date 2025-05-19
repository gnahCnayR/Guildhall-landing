'use client'

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, extend } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, ShaderMaterial } from "three";
import * as THREE from 'three';

const DitheringMaterial = {
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 0.6 },
    scale: { value: 1.0 },
    tDither: { value: null }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float opacity;
    uniform float scale;
    varying vec2 vUv;

    float dither8x8(vec2 position, float brightness) {
      int x = int(mod(position.x, 8.0));
      int y = int(mod(position.y, 8.0));
      int index = x + y * 8;
      float limit = 0.0;

      if (x < 8) {
        if (index == 0) limit = 0.015625;
        if (index == 1) limit = 0.515625;
        if (index == 2) limit = 0.140625;
        if (index == 3) limit = 0.640625;
        if (index == 4) limit = 0.046875;
        if (index == 5) limit = 0.546875;
        if (index == 6) limit = 0.171875;
        if (index == 7) limit = 0.671875;
        // ... Add more cases for the full 8x8 pattern
      }

      return brightness < limit ? 0.0 : 1.0;
    }

    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      float brightness = (color.r + color.g + color.b) / 3.0;
      
      vec2 position = gl_FragCoord.xy * scale;
      float dither = dither8x8(position, brightness);
      
      gl_FragColor = vec4(vec3(dither), opacity);
    }
  `
};

const DitherMaterial = new ShaderMaterial(DitheringMaterial);

useGLTF.preload("/assets/castle.glb");

export default function Castle() {
    const group = useRef<Group>(null);
    const { nodes, materials, animations, scene } = useGLTF("/assets/castle.glb");
    const { actions } = useAnimations(animations, group);

    useEffect(() => {
        if (scene) {
            scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    // Apply dithering material
                    child.material = new THREE.ShaderMaterial({
                        ...DitheringMaterial,
                        uniforms: {
                            ...DitheringMaterial.uniforms,
                            tDiffuse: { value: child.material.map },
                            scale: { value: 2.0 }
                        }
                    });
                }
            });
        }

        if (actions && Object.keys(actions).length > 0) {
            const firstAction = Object.values(actions)[0];
            firstAction?.play();
        }
    }, [scene, actions]);

    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group ref={group} dispose={null}>
            <primitive 
                object={scene} 
                scale={1.75}
                position={[0, 0, 0]}
            />
        </group>
    );
}