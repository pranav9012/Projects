import { useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import Dragon from '../models/dragon';

function DragonWrapper({ isRotating, isZoomedIn, currentStage, setIsRotating, setIsZoomedIn, setCurrentStage }) {
    const adjustPlanetForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [-3, -3, -4]; // Init -2, -3, -10 // mid 13, -3, -60
        let rotation = [Math.PI / 6, Math.PI - 0.2, 0];
    
        if (window.innerWidth < 768) {
          screenScale = [0.03, 0.03, 0.03];
        } else {
          screenScale = [2, 2, 2];
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
          <Dragon
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

export default DragonWrapper