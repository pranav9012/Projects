// import { useHelper } from '@react-three/drei';
import { a } from '@react-spring/three';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { val } from '@theatre/core';
import { editable as e, PerspectiveCamera, SheetProvider } from '@theatre/r3f';
import React, { useRef } from 'react';
import IsleTown from '../models/isleTown';

function IsleTownWrapper({currentStage, transitioning, setTransitioning, demoSheet}) {
  
  const scroll = useScroll();
  const adjustPlanetForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -3, -50];

    if (window.innerWidth < 768) {
      screenScale = [0.45, 0.45, 0.45];
    } else {
      screenScale = [1.25, 1.25, 1.25];
    }

    return [screenScale, screenPosition];
  }

  const [isPlanetScale, isPlanetPosition] = adjustPlanetForScreenSize();

  // Light references for helpers
  const dirLightRef = useRef();
  const spotLightRef = useRef();
  const pointLightRef = useRef();
  const hemiLightRef = useRef();

  useFrame(() => {
    const sequenceLength = val(demoSheet.sequence.pointer.length);
    demoSheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <a.mesh>
        <SheetProvider sheet={demoSheet}>
            <e.mesh theatreKey='isleTown'>
              <IsleTown
                scale={isPlanetScale}
                currentStage={currentStage}
                transitioning={transitioning}
                setTransitioning={setTransitioning}
              />
            </e.mesh>
          {currentStage > 0 &&
            <group>
              <PerspectiveCamera theatreKey='camera' makeDefault fov={35}
                position={[0, 0, 0]} />
            </group>
          }
        </SheetProvider>
    </a.mesh>
  )
}

export default IsleTownWrapper;
