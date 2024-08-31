import React, { useState } from "react";

function ColorPalatte({colors, setImgIndex}){
    // console.log(colors);
    const palatte = [...new Set(colors)];
    // console.log(palatte[0]);
    const idx = Math.floor(colors.length / palatte.length);
    // console.log(idx);
    const [selectedPalatte, setSelectedPalatte] = useState(0);

    function handlePalatte(index){
        console.log(index);
        setSelectedPalatte(index);
        setImgIndex(index);
    }

    return(
        <>
        {
        palatte.map((color, index) => 
        <div key={index*idx} className={`w-6 h-6 transition-all duration-100 ${selectedPalatte == index*idx && 'border-2'}
                rounded-full`} style={{backgroundColor: color}}
                onClick={() => handlePalatte(index*idx)}></div>
        )
    }
    </>)
}

function ColorPalatteBig({colors, setImgIndex}){
    // console.log(colors);
    const palatte = [...new Set(colors)];
    // console.log(palatte[0]);
    const idx = Math.floor(colors.length / palatte.length);
    // console.log(idx);
    const [selectedPalatte, setSelectedPalatte] = useState(0);

    function handlePalatte(index){
        console.log(index);
        setSelectedPalatte(index);
        setImgIndex(index);
    }

    return(
        <>
        {
        palatte.map((color, index) => 
        <div key={index*idx} className={`md:w-12 md:h-12 w-8 h-8 transition-all duration-200 ${selectedPalatte == index*idx && 'border-4'}
                md:rounded-xl rounded-md hover:cursor-pointer`} style={{backgroundColor: color}}
                onClick={() => handlePalatte(index*idx)}></div>
        )
    }
    </>)
}

export default ColorPalatte;
export { ColorPalatteBig };
