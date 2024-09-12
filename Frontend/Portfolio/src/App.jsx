import { getProject } from '@theatre/core';
import React, { Suspense, useEffect, useState } from 'react';
import CustomLoader from './components/CustomLoader';
import Home from './components/home';
import Modal from './components/Modal';
import PopUp from './components/popUp';
import Scenes from './components/Scenes';
import VolumeBtn from './components/VolumeBtn';
import IsleAnnot from './isleAnime.json';
const demoSheet = getProject('Demo Project', { state: IsleAnnot }).sheet('Demo Sheet');
function App() {

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [changeColor, setChangeColor] = useState(true);
  const [modalState, setModalState] = useState(true);
  const [show, setShow] = useState(true);
  const [isMute, setIsMute] = useState(true);

  useEffect(() => {
    console.log("currentStage: " + currentStage + " transitioning: " + transitioning);
    if(transitioning && currentStage === 0){
        setTimeout(() => {
          setChangeColor(true);
          console.log("color Changed")
        }, 400);
    }
  }, [currentStage, transitioning]);;

  return (
    <div className={`w-screen h-screen overflow-hidden flex justify-center items-center -z-10
            shadow-inset-lg bg-[#1b203a]`}>
      <Suspense fallback={<CustomLoader />}>
        <VolumeBtn 
          isMute={isMute}
          setIsMute={setIsMute}
        />
        <Home
          isRotating={isRotating}
          currentStage={currentStage}
          setIsRotating={setIsRotating}
          transitioning={transitioning}
          setTransitioning={setTransitioning}
          changeColor={changeColor}
          demoSheet={demoSheet}
          show={show}
          setShow={setShow}
        />
        <Scenes
          currentStage={currentStage}
          setCurrentStage={setCurrentStage}
          setTransitioning={setTransitioning}
          sheet={demoSheet}
          show={show}
        />
        <PopUp
            sheet={demoSheet}
        />
        <Modal
          modalState={modalState}
          setModalState={setModalState}
          show={show}
        />
      </Suspense>
      {/* {loading && <CustomLoader />} */}
    </div>
  )
}

export default App
