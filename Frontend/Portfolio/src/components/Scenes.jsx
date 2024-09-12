import React, { useEffect } from 'react';
import StartBtn from './startBtn';
import timeStageMap from './TimeStageMap';

function Scenes({currentStage, setCurrentStage, setTransitioning, sheet, show}) {
  useEffect(() => {
    if(currentStage > 0){
      const endTime = timeStageMap[currentStage - 1];
      console.log(endTime);
      sheet.sequence.play();
      setTimeout(() => sheet.sequence.pause(), 4000)

    }
  }, [sheet]);

  return (
    <div className='absolute z-10 bottom-6 overflow-hidden max-w-80 flex items-center justify-center
            transition-all'>
      {
      (currentStage === 0 && !show) &&
      <StartBtn
        currentStage={currentStage}
        setCurrentStage={setCurrentStage}
        text={"START"}
        setTransitioning={setTransitioning}
        btnType={"start"}
        />
      }
        {/* {
        currentStage > 0 && <div className='flex gap-10 items-center justify-center overflow-hidden
                transition-opacity transform duration-200'>
        {currentStage <12 &&
        <StartBtn
          isZoomedIn={isZoomedIn}
          currentStage={currentStage}
          setIsZoomedIn={setIsZoomedIn}
          setCurrentStage={setCurrentStage}
          text={"NEXT"}
          transitioning={transitioning}
          setTransitioning={setTransitioning}
          btnType={"next"}
        />}

        {currentStage > 1 &&
        <StartBtn
          isZoomedIn={isZoomedIn}
          currentStage={currentStage}
          setIsZoomedIn={setIsZoomedIn}
          setCurrentStage={setCurrentStage}
          text={"BACK"}
          transitioning={transitioning}
          setTransitioning={setTransitioning}
          btnType={"prev"}
        />}
        </div>
        } */}
    </div>
  )
}

export default Scenes