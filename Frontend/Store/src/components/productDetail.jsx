import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCarousal from "./productCarousal";
import ProductDesc from "./productDesc";

function ProductDetail({addToCart, cartItems}){
    const location = useLocation();
    const item = location.state;
    const palatte = [...new Set(item.color)];
    const color_length = Math.floor(item.color.length / palatte.length);
    const [imageIdx, setImageIdx] = useState(0)
    const [selectedImage, setSelectedImage] = useState(item.image[imageIdx])
    // console.log(item);
    return(
        <div className="grid md:grid-cols-4 grid-rows-3 text-white gap-6 pt-10 px-28">
            <div className="col-span-2 row-span-3">
                <ProductCarousal 
                    images={item.image}
                    color_length={color_length}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    imageIdx={imageIdx}/>
            </div>
            <div className="col-span-2 row-span-3">
                <ProductDesc
                    item={item}
                    setImageIdx={setImageIdx}
                    imageIdx={imageIdx}
                    addToCart={addToCart}
                    cartItems={cartItems}/>
            </div>
            

        </div>
    )
}

export default ProductDetail;