import { easings, useSpring } from "@react-spring/three";
import { ScrollControls } from '@react-three/drei';
import { useFrame, useThree } from "@react-three/fiber";
import React, { useEffect } from "react";
import DragonWrapper from "./DragonWrapper";
import EarthWrapper from "./EarthWrapper";
import IsleTownWrapper from "./IsleTownWrapper";
import PhenioxWrapper from "./PhenioxWrapper";
import SkyWrapper from "./SkyWrapper";

function SceneController({isRotating,currentStage, setIsRotating, transitioning,
            setTransitioning, changeColor, demoSheet,}) {
        const { camera } = useThree();
        const [zoomVar, EarthApi] = useSpring(() => ({
          from: {   fov: 150,
                    zpos: 500,
                    xpos: 40,
                    ypos: 6.123233995736766e-16,
                    zrot: 0,
                    xrot: -6.123233995736766e-17,
                    yrot: 0 },
          to:   {   fov: 65,
                    zpos: 300,
                    xpos: 0,
                    ypos: 6.123233995736766e-16,
                    zrot: 0,
                    xrot: -6.123233995736766e-17,
                    yrot: 0 },
          config: { mass: 0.5, tension: 120, friction: 14, duration: 1000, easing: easings.easeOutQuad},
        }));
        useEffect(() => {
            if (transitioning && currentStage === 0) {
                EarthApi.start({
                    from: {     fov: 65,
                                zpos: 300,
                                xpos: 0,
                                ypos: 6.123233995736766e-16,
                                zrot: 0,
                                xrot: -6.123233995736766e-17,
                                yrot: 0 },
                    to: {   fov: 35,
                            zpos: 0.018197153164363333,
                            xpos: 0,
                            ypos: 1.1142542688165843e-18,
                            zrot: 0,
                            xrot: -6.123233995736766e-17,
                            yrot: 0 },
                    config: {
                        easing: easings.easeOutQuad,
                        duration: 800
                    }
            });
            }
          }, [transitioning]);
          
        useFrame(() => {
            if(!transitioning && currentStage === 0){
                camera.fov = zoomVar.fov.get();
                camera.position.z = zoomVar.zpos.get();
                camera.position.x = zoomVar.xpos.get();
                camera.position.y = zoomVar.ypos.get();
                camera.rotation.z = zoomVar.zrot.get();
                camera.rotation.x = zoomVar.xrot.get();
                camera.rotation.y = zoomVar.yrot.get();
                camera.updateProjectionMatrix();
            }
            if(transitioning && currentStage === 0){
                camera.fov = zoomVar.fov.get();
                camera.position.z = zoomVar.zpos.get();
                camera.position.x = zoomVar.xpos.get();
                camera.position.y = zoomVar.ypos.get();
                camera.rotation.z = zoomVar.zrot.get();
                camera.rotation.x = zoomVar.xrot.get();
                camera.rotation.y = zoomVar.yrot.get();
                camera.updateProjectionMatrix();
            }
        });
        // useEffect(() => {
        //     setTimeout(() => {
        //     console.log(`FOV: ${camera.fov}, Zoom: ${camera.zoom}`);
        //     console.log(`Camera Position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
        //     console.log(`Camera Rotation: x=${camera.rotation.x}, y=${camera.rotation.y}, z=${camera.rotation.z}`);
        // }, 1000)});


  return (
        <group>
            <EarthWrapper
                isRotating={isRotating}
                currentStage={currentStage}
                setIsRotating={setIsRotating}
                transitioning={transitioning}
                setTransitioning={setTransitioning}
                changeColor={changeColor}
            />
        {currentStage >= 1 && (
                <group>
                    <PhenioxWrapper />
                    <DragonWrapper />
                </group>
        )}
        { changeColor && <group>
                <group>
                    <ScrollControls pages={30} friction={2}>
                        <SkyWrapper
                            transitioning={transitioning}
                            currentStage={currentStage}
                            changeColor={changeColor}
                        />
                        <IsleTownWrapper
                            currentStage={currentStage}
                            transitioning={transitioning}
                            setTransitioning={setTransitioning}
                            demoSheet={demoSheet}
                        />
                    </ScrollControls>
                </group>
            </group>}
        </group>
  )
}

export default SceneController