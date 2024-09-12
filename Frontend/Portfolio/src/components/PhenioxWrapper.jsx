import { useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import Pheniox from '../models/Pheniox';

function PhenioxWrapper({ isRotating, isZoomedIn, currentStage, setIsRotating, setIsZoomedIn, setCurrentStage }) {
    const adjustPlanetForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [-55, -2, -70]; //-10, 2, -20
        let rotation = [0, 0, 0];
    
        if (window.innerWidth < 768) {
          screenScale = [0.001, 0.001, 0.001];
        } else {
          screenScale = [0.01, 0.01, 0.01];
        }
    
        return [screenScale, screenPosition, rotation];
      };
    
      const [isPlanetScale, isPlanetPosition, isPlanetRotation] = adjustPlanetForScreenSize();
    
      const { camera } = useThree();
    
      // Light references for helpers
      const dirLightRef = useRef();
      const spotLightRef = useRef();
      const pointLightRef = useRef();
      const hemiLightRef = useRef();
    
      // Attach helpers to lights
    //   useHelper(dirLightRef, DirectionalLightHelper, 5); // 5 is the size of the helper
    //   useHelper(spotLightRef, SpotLightHelper, 5);
    //   useHelper(pointLightRef, PointLightHelper, 5);
    //   useHelper(hemiLightRef, HemisphereLightHelper, 5);
    
      return (
        <>
          {/* Lights */}
          <directionalLight ref={dirLightRef} intensity={0.1} position={[0, 0.3, 1]} />
          <ambientLight intensity={0.5} color={'#ffffff'} />
    
          {/* Mining Town Model */}
          <Pheniox
            position={isPlanetPosition}
            scale={isPlanetScale}
            rotation={isPlanetRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            isZoomedIn={isZoomedIn}
            setIsZoomedIn={setIsZoomedIn}
          />
        </>
      );
    }

export default PhenioxWrapper