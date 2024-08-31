import React from "react";

function SizeSelector({sizeArr, selectedSize, setSelectedSize}){
    
    return(
        <>
        {
        sizeArr.map((size, index) => 
        <div key={index}
             className={`my-2 mr-3 md:w-12 md:h-12 h-10 w-10 flex justify-center items-center hover:cursor-pointer 
                transition-all duration-100 hover:text-gray-400 md:text-lg text-sm
                ${selectedSize == index ? 'border-2 border-white' : 'shadow-slate-400/50 shadow-size'} `}
            onClick={() => setSelectedSize(index)}>
                {size}
            </div>
        )
    }
    </>)
}

export default SizeSelector;