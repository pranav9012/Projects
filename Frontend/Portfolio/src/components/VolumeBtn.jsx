import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import TavrenMusic from '../assets/tavren_music.mp3';

export function VolumeBtn({isMute, setIsMute}) {
  const audioRef = useRef(new Audio(TavrenMusic));
  audioRef.current.loop = true;

  const buttonRef = useRef(null);

  const handleClick = () => {
    if (isMute) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setIsMute(!isMute);
  };

  useEffect(() => {
    const simulateClick = () => {
      buttonRef.current.click();
    };
    document.addEventListener('DOMContentLoaded', simulateClick);
    return () => {
      document.removeEventListener('DOMContentLoaded', simulateClick);
    };
  }, [buttonRef]);

  return (
    <header
      className={`absolute text-white text-3xl left-5 top-5 p-3
        bg-yellow-500 rounded-full hover:cursor-pointer 
        z-50 transition-all duration-200`}
        ref={buttonRef}
        onClick={handleClick}
    >
      <FontAwesomeIcon icon={isMute ? faVolumeMute : faVolumeHigh} />
    </header>
  );
}

export default VolumeBtn;