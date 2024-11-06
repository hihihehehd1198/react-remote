import { Grid, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC, Suspense, useEffect, useState } from "react";
import { Loading } from "../loading";
import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
const WrapperStyle = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  z-index: 0;
  position: relative;
  .img-bg-scene {
    background: url("https://threejs-model.s3.ap-southeast-1.amazonaws.com/background4.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }
  .scene {
    z-index: 2;
  }
`;
const Model = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { scene } = useGLTF(
    "https://threejs-model.s3.ap-southeast-1.amazonaws.com/444.glb"
  );
  //ljahsdjkahsjkdh
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    console.log(mediaQuery);
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  });
  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.3 : 0.6}
      position={isMobile ? [1, -2, 0] : [1, -2.5, 0]}
    />
  );
};
export const SceneComponent: FC = () => {
  return (
    <WrapperStyle>
      <div className="img-bg-scene"></div>
      <Canvas
        className="cursor-pointer scene"
        shadows
        frameloop="demand"
        camera={{ position: [0, 1, 15], fov: 23 }}
      >
        {/* <Grid position={[0, -2.5, 0]} args={[10, 10]} /> */}
        <Suspense fallback={<Loading />}>
          <OrbitControls
            enablePan={false}
            enableDamping={true}
            enableZoom={false}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <mesh>
            <hemisphereLight intensity={4} />
            <pointLight intensity={10} position={[0, 1, 0]} />
            <Model />
          </mesh>
        </Suspense>
      </Canvas>
    </WrapperStyle>
  );
};
