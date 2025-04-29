import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../components/LoaderOne";

const Computers = ({ isMobile, rotation }) => {
  const { scene } = useGLTF("/mouse/scene.gltf");

  return (
    <group dispose={null}>
      <hemisphereLight intensity={1.5} groundColor="black" />
      <directionalLight
        position={[200, 240, 600]}
        intensity={25.2}
        shadow-mapSize-width={0}
        shadow-mapSize-height={0}
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.55 : 0.75}
        position={[0, 0, 0]}
        rotation={rotation}
      />
    </group>
  );
};

const Trophy = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      setRotation([0, x * Math.PI, 0]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={window.devicePixelRatio}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} rotation={rotation} />
      </Suspense>
    </Canvas>
  );
};

export default Trophy;
