import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from "react";
import Collapsible from "./collapsible";
import { ColorPalatteBig } from "./colorPalatte";
import SizeSelector from "./sizeSelector";

function ProductDesc({item, setImageIdx, imageIdx, addToCart, cartItems}){

    const sizeArr = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
    const [selectedSize,  setSelectedSize] = useState(0);
    const [selectColor, setSelectColor] = useState(item.color_name[0]);
    const [productQuantity, setProductQuantity] = useState(1);
    const qualityDesc = "Quality is guaranteed. If there is a print error or visible quality issue, we'll replace or refund it.Because the products are made to order, we do not accept general returns or sizing-related returns."
    const handleProductQty = (qty) => {
        if(qty <= 1){
            setProductQuantity(1);
        }
        else if(qty >= 20){
            setProductQuantity(20);
        }
        else{
            setProductQuantity(qty);
        }
    }

    function generateCartItem(item){
        return {
            id: item.title,
            title: item.title,
            store: item.store,
            price: item.cost,
            quantity: productQuantity,
            size: sizeArr[selectedSize],
            color_name: selectColor,
            color: item.color[imageIdx],
            image: item.image[imageIdx],
            category: item.category,
            raw: item
        }
    }

    function handleAddToCart(){
        const cartItem = generateCartItem(item);
        console.log(cartItem);
        addToCart(cartItem);
    }

    useEffect(() => {
        setSelectColor(item.color_name[imageIdx]);
    }, [imageIdx])


    return(
        <div className="flex flex-col justify-start items-start pl-6 pt-6">
                    <div className="md:text-4xl font-semibold text-3xl">
                        {item.title}
                    </div>
                    <div className="md:text-2xl mt-10 text-xl">
                        ${item.cost}
                    </div>
                    <div className="text-lg mt-10">
                        Select Color: <span className="font-semibold">{selectColor[0].toUpperCase() + selectColor.slice(1)}</span>
                    </div>
                    <div className="mt-2 flex md:space-x-4 space-x-2 flex-wrap">
                        <ColorPalatteBig colors={item.color} setImgIndex={setImageIdx}/>
                    </div>
                    {item.category == 'Hoodie' || item.category == 'Sweatshirt' ? <><div className="text-lg mt-4">
                        Select Size:
                    </div>
                    <div className="my-2 flex flex-wrap">
                        <SizeSelector 
                            sizeArr={sizeArr}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}/>
                    </div></> : <> </>}
                    <div className="w-full h-[2px] bg-gray-500 mt-4 mx-auto opacity-50 md:mb-6">
                    </div>
                    <div className={`text-red-500 ${productQuantity >= 20 ? 'visible' : 'invisible'} mb-2 
                            md:text-sm text-[12px]`}>
                        We do not ship more than 20 Quantities.
                    </div>
                    <div className="flex md:flex-row flex-col w-full md:h-16 h-44 overflow-hidden justify-center items-center
                            md:justify-start md:items-center">
                        <div className="w-full h-full md:h-14 basis-1/3 shadow-size shadow-gray-400/40  flex flex-row
                                justify-between items-center py-1">
                            <div className="basis-1/3 text-center h-full flex flex-col justify-center hover:cursor-pointer
                                    transition-all duration-200 hover:text-gray-400 w-full"
                                 onClick={() => handleProductQty(productQuantity - 1)}>
                                <FontAwesomeIcon icon={faMinus}/>
                            </div>
                            <span className="w-[2px] h-[80%] bg-gray-500 opacity-50">
                            </span>
                            <div className="basis-1/3 text-center h-full flex flex-col justify-center hover:cursor-not-allowed
                                    w-full">
                                {productQuantity}
                            </div>
                            <span className="w-[2px] h-[80%] bg-gray-500 opacity-50">
                            </span>
                            <div className="basis-1/3 text-center h-full flex flex-col justify-center hover:cursor-pointer
                                    transition-all duration-200 hover:text-gray-400 w-full"
                                 onClick={() => handleProductQty(productQuantity + 1)}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </div>
                        </div>
                        <div className="md:max-w-80 w-full h-14 bg-gray-50 md:flex-grow mx-10 flex justify-center mt-8 md:mt-0
                                items-center hover:bg-gray-300 hover:cursor-pointer transition-all duration-200"
                                onClick={handleAddToCart}>
                            <div className="text-black font-semibold uppercase md:text-base text-sm">
                                Add to Cart
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 w-full">
                        <Collapsible title="More Details" content={item.description}/>
                    </div>
                    <div className="w-full">
                        <Collapsible title="Quality Guarantee & Returns" content={qualityDesc}/>
                    </div>
        </div>
    )
}

export default ProductDesc;