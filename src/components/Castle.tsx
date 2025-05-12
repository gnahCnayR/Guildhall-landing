'use client';

import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"

useGLTF.preload("/assets/castle.glb")

export default function Castle() {
    const group = useRef<Group>(null)
    const { nodes, materials, animations, scene } = useGLTF(
       "/assets/castle.glb"
    )

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}