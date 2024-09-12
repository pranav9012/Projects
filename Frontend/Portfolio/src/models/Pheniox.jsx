import { a } from '@react-spring/three';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from "three";
import PhenioxModel from '../assets/bird.glb';
function Pheniox({isRotating, setIsRotating, isZoomedIn, setIsZoomedIn, ...props}) {
  const PhenioxRef = useRef();
  const { gl, viewport, camera } = useThree();
  const {nodes, materials, animations } = useGLTF(PhenioxModel);
  const { actions } = useAnimations(animations, PhenioxRef);
  const [dir, setDir] = useState(true); // forward
  let positionRef = useRef(0);
  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  const forwards = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-85, -2, -70),  // Start point
    new THREE.Vector3(-30, 4, -70),
    new THREE.Vector3(-20, 20, -110),
    new THREE.Vector3(0, 30, -130),
    new THREE.Vector3(20, 40, -160),
    new THREE.Vector3(50, 50, -180),
    new THREE.Vector3(180, 55, -180),  // End point
  ], false);

  const backwards = new THREE.CatmullRomCurve3([
    new THREE.Vector3(180, 55, -180),  // Start point
    new THREE.Vector3(50, 50, -180),
    new THREE.Vector3(20, 40, -160),
    new THREE.Vector3(0, 30, -130),
    new THREE.Vector3(-20, 20, -110),
    new THREE.Vector3(-30, 4, -70),
    new THREE.Vector3(-85, -2, -70),  // End point
  ], false);

  useFrame(({ clock }) => {
    positionRef.current += 0.0002; // Increment the progress on the curve
  
    if (positionRef.current >= 1) {
      positionRef.current = 0; // Reset when reaching the end
      setDir((prev) => !prev); // Switch direction
    }
  
    // Choose the curve based on direction
    const curve = dir ? forwards : backwards;
  
    // Get the position on the active curve
    const position = curve.getPointAt(positionRef.current);
  
    // Set Phoenix's position to follow the curve
    PhenioxRef.current.position.set(
      position.x, 
      position.y + Math.sin(clock.elapsedTime) * 0.2, // Add some dynamic flying effect
      position.z
    );
  
    // Adjust rotation based on direction
    PhenioxRef.current.rotation.set(0, dir ? 0 : Math.PI, 0); // Forward or backward rotation
  });

    return (
      <>
      <a.group ref={PhenioxRef} {...props}>
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          geometry={nodes.Object_7.geometry}
          material={materials.MatI_Ride_FengHuang_01a}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Object_8.geometry}
          material={materials.MatI_Ride_FengHuang_01b}
          skeleton={nodes.Object_8.skeleton}
        />
      </a.group>
      <EffectComposer>
          <Bloom
            intensity={1} // Control the intensity of the bloom
            luminanceThreshold={2.5} // Control which parts should glow based on brightness
            luminanceSmoothing={0.5} // Smooth transition for bright parts
            height={500} // Control the resolution of the bloom
          />
      </EffectComposer>
      </>
    )
  }

export default Pheniox