import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../../../components/about/Loader";

const Cyclorotor = ({ isMobile }) => {
  const cyclorotor = useGLTF("./cyclorotor.gltf");

  // Apply gradient material to all meshes
  useEffect(() => {
    cyclorotor.scene.traverse((child) => {
      if (child.isMesh) {
        // Create a material that transitions from white to gray
        child.material.color.set('#ffffff');    // Base white color
        child.material.metalness = 0.6;         // Increased metalness for metallic look
        child.material.roughness = 0.3;         // Slightly rougher for industrial feel
        child.material.envMapIntensity = 2.0;   // Enhanced environment reflections
        child.material.emissive.set('#808080'); // Gray emission
        child.material.emissiveIntensity = 0.4; // Subtle emission for gradient
      }
    });
  }, [cyclorotor]);

  return (
    <mesh>
      {/* Base ambient light */}
      <ambientLight intensity={0.6} color="#ffffff" />
      
      {/* Gradient hemisphere light - white to gray */}
      <hemisphereLight 
        intensity={1.0}
        groundColor='#4a4a4a'    // Dark gray for bottom
        color='#ffffff'          // White for top
      />
      
      {/* Main top light */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.7}
        penumbra={1}
        intensity={1.8}
        castShadow
        shadow-mapSize={1024}
        color='#ffffff'
      />
      
      {/* Gray accent light from bottom */}
      <spotLight
        position={[20, -30, -10]}
        angle={0.8}
        penumbra={1}
        intensity={0.8}
        color='#a0a0a0'
      />

      {/* Center highlight */}
      <pointLight position={[0, 0, 5]} intensity={1.5} color="#d3d3d3" />
      
      {/* Gray rim light */}
      <pointLight position={[-5, 0, -5]} intensity={0.8} color="#808080" />

      <primitive
        object={cyclorotor.scene}
        scale={isMobile ? 0.035 : 0.035}
        position={[0, 0, -2]}
        rotation={[-0.01, 0, -0.1]}
      />
    </mesh>
  );
};

const Cyclorotormodel = () => {
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
        toneMappingExposure: 1.5  // Adjusted exposure for metallic look
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Cyclorotor isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default Cyclorotormodel;