import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../../components/about/Loader";

const RAMJET = ({ isMobile }) => {
    const ramjet = useGLTF("./ramjet.gltf");

    // Apply gradient material to all meshes
    useEffect(() => {
        ramjet.scene.traverse((child) => {
            if (child.isMesh) {
                // Create material with white-to-gray gradient
                child.material.color.set('#ffffff');    // Base white color
                child.material.metalness = 0.6;         // Metallic appearance
                child.material.roughness = 0.3;         // Surface texture
                child.material.envMapIntensity = 2.0;   // Reflection intensity
                child.material.emissive.set('#808080'); // Gray emission
                child.material.emissiveIntensity = 0.4; // Subtle glow
            }
        });
    }, [ramjet]);

    return (
        <mesh>
            {/* Gradient lighting setup */}
            <ambientLight intensity={0.6} color="#ffffff" />
            <hemisphereLight 
                intensity={1.0}
                groundColor='#4a4a4a'
                color='#ffffff'
            />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.5}
                penumbra={1}
                intensity={1.8}
                castShadow
                shadow-mapSize={1024}
                color='#ffffff'
            />
            <spotLight
                position={[20, -30, -10]}
                angle={0.8}
                penumbra={1}
                intensity={0.8}
                color='#a0a0a0'
            />
            <pointLight position={[0, 0, 0]} intensity={1.5} color="#d3d3d3" />
            <pointLight position={[-5, 0, -5]} intensity={0.8} color="#808080" />

            <primitive
                object={ramjet.scene}
                scale={isMobile ? 0.15 : 0.15}
                position={[0, 0.8, -0.5]}
                rotation={[0, 0, 2 * Math.PI]}
            />
        </mesh>
    );
};

const Ramjet = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ 
                preserveDrawingBuffer: true,
                toneMappingExposure: 1.5  // Enhanced exposure for metallic effect
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <RAMJET isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
}

export default Ramjet;