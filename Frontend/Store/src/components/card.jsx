import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOneProduct } from "./APIs/productAPI";
import ColorPalatte from "./colorPalatte";

function Card({item, title}){
    // console.log(item.color + title);
    const [imgIndex, setImgIndex] = useState(0);
    const navigate = useNavigate();
    async function handleClick(){
        console.log(item.store + item.title);
        const product = await getOneProduct(item.title, item.store);
        navigate(`/${item.store}/${item.title}`, {state: product});
    }

    return(
        <div className="flex flex-col m-10 w-full max-w-sm h-auto max-h-[600px] text-white p-1 rounded-lg
        text-lg hover:cursor-pointer hover:shadow-card hover:shadow-gray-500 card
        ">
            <img src={item.image[imgIndex]} className={`rounded-lg mb-3 h-5/6`} onClick={handleClick}/>
            <div className="mb-3 pl-3" onClick={handleClick}>{title}</div>
            <div className="flex items-center justify-between">
                <div className="pl-3 font-bold grow" onClick={handleClick}>${item.cost}</div>
                <div className={`pl-3 pr-5 justify-end flex space-x-4 `}>
                   <ColorPalatte colors={item.color} setImgIndex={setImgIndex}/>
                </div>
            </div>
        </div>
    )
}

export default Card;