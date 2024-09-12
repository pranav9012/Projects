import React, { useState } from 'react';

function StartBtn({ currentStage, setCurrentStage ,text, setTransitioning, btnType}){

  const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(true);
        setTransitioning(true);
        setTimeout(() => {
            setClicked(false);
            setTransitioning(false);
            if(btnType === 'next'){
              if(currentStage >= 1)   setCurrentStage((currentStage + 1) % 13);
            }
            else if(btnType === 'prev'){
              if(currentStage > 1)  setCurrentStage((currentStage - 1) % 13);
              else  setCurrentStage(2);
            }
            if(btnType === 'start')   setCurrentStage(1);
          }, 800);
        }

  return (
    <div className='w-full h-20 flex items-center justify-center'>
      <div className={`w-32 h-14 bg-[#7F0033] rounded-2xl border-0
            cursor-pointer outline-offset-4 flex justify-center items-center overflow-hidden
            transition transform duration-200 ${clicked ? 'animate-startBtn' : ''}`}
            onMouseDown={handleClick}>
        <button className={`bg-red-600 w-full h-full -translate-y-2 rounded-2xl
                text-lg text-white flex justify-center items-center `}>
          <div className='flex justify-center items-center pt-3'>
            {text}
          </div>
        </button>
      </div>
    </div>
  )
}

export default StartBtn