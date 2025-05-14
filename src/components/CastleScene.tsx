'use client'

import { Canvas, useThree } from "@react-three/fiber"
import Castle from "./Castle"
import { Suspense } from "react"

export default function CastleScene() {
    return (
        <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <Suspense fallback={null}>
                <Castle />
            </Suspense>
        </Canvas>
    )
}