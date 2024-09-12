import { animated } from '@react-spring/three';
import React, { useRef } from 'react';
import Sky from '../models/sky';

function SkyWrapper({transitioning, currentStage, changeColor}) {
    
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
        // <e.group theatreKey='sky'>
        <animated.group>
              <directionalLight ref={dirLightRef} intensity={changeColor ? 20 : 5}
                position={changeColor ?
                  [51.846308620959476, 28.58978453629142, -16.2427838076621854] : [1, 0.3, 0.4]}
                color={changeColor ? "#eb6e60" : ""} />
              <spotLight ref={spotLightRef} intensity={changeColor ? -3.85 : 2}
                position={changeColor ?
                    [90.46755704019027, 98.23315875147496, -99.19559386730226] : [4, 3, 4.8]}
                color={changeColor ? '#e3311c' : '#f7f1a2'}
                penumbra={-1} decay={0} distance={changeColor ? 200 : 0}
                angle={changeColor ? 0.128 : 0}  />
              <pointLight theatreKey='islePlight' color={changeColor ? '#e3311c' : '#f7f1a2'}
                intensity={1}
                position={changeColor ?
                    [112.6326077567038, 43.49770548262643, -122.27492454242598] : [10, 4, 3]} />
              <fog attach="fog" color={"#e3311c"} near={-1} far={10}/>
              <ambientLight intensity={changeColor ? 0.5 : 0.5} color={'#f7f1a2'} />
          <Sky transitioning={transitioning} currentStage={currentStage}/>
        </animated.group>
      );
}

export default SkyWrapper