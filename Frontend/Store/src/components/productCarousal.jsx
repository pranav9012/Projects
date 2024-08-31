import React, { useEffect, useState } from "react";

function ProductCarousal({images, color_length, selectedImage,
                    setSelectedImage, imageIdx}){
    
    const [isTransitioning, setIsTransitioning] = useState(false);
    useEffect(() => {
            setSelectedImage(images[imageIdx]);
    }, [imageIdx]);

    function handleSubImage(img){
        setIsTransitioning(true);
        setTimeout(() => {
            setIsTransitioning(false);
            setSelectedImage(img);
        }, 150);
    }

    return(
        <div className="flex flex-col md:flex-row">
            <div className="flex md:flex-col">
                {images.map((img, index) => {
                return((index >= imageIdx && index < imageIdx + color_length)
                    && 
                    <img 
                        key={index}
                        src={img}
                        className={`mb-3 rounded-md max-w-24 max-h-24 cursor-pointer object-cover
                        ${selectedImage == img ? 'border-4 border-gray-600' : ""}
                        transition-all duration-200`}
                        onClick={() =>handleSubImage(img)}/>
                );})}
            </div>
            <div className={`ml-4 h-auto transition-all ease-in-out order-first md:order-none
                    ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
                <img
                    src={selectedImage}
                    alt='Selected Product'
                    className={`object-contain md:w-11/12 h-auto max-h-[600px] rounded-md
                        `}
                    />
            </div>
        </div>
    )
}

export default ProductCarousal;
