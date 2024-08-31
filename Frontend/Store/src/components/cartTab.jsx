import React from "react";
import { useNavigate } from "react-router-dom";
import CartContainer from "./cartContainer";

function CartTab({cartItems}){

    const {totalCost, totalQuantity} = cartItems.reduce((acc, item) => {
        acc.totalCost += item.price * item.quantity;
        acc.totalQuantity += item.quantity;
        return acc;
    }, {totalCost: 0, totalQuantity: 0});
    const navigate = useNavigate();

    function handleGoingBackToHome(){
        navigate('/');
    }

    function handleCheckout(){
        alert("Thanks for Shopping! \n P.S No Plan on creating a Checkout page yet");
    }
    
    return(
        <div className="flex items-center justify-center relative">
            <div className="flex flex-col items-start justify-between mt-12 w-8/12">
                <div className="text-gray-200 md:text-3xl text-xl tracking-widest pl-6">
                    {totalQuantity} items in your Cart for ${totalCost}
                </div>
                <div className="flex text-gray-200 tracking-widest mt-10 w-full md:pl-6 pl-2
                        text-sm md:text-base">
                    <div className="md:basis-8/12 basis-7/12 md:text-base w-full">Item</div>
                    <div className="basis-3/12 text-center md:text-base w-full">Qty</div>
                    <div className="basis-3/12 text-center md:text-base w-full">Price</div>
                </div>
                <div className="w-full h-[1px] bg-gray-500 md:mt-4 mx-auto opacity-50"></div>
                <CartContainer cartItems={cartItems} />
                <div className="flex text-gray-200 tracking-widest mt-10 w-full pl-6">
                        <div className="basis-8/12"></div>
                        <div className="basis-6/12 w-full h-[1px] bg-gray-700 mt-4 
                                mx-auto opacity-50"></div>
                </div>
                <div className="flex flex-col md:flex-row text-gray-200 tracking-widest mt-4 md:mt-10 w-full pl-2 md:pl-6
                        text-sm md:text-base">
                        <div className="md:basis-8/12 basis-7/12"></div>
                        <div className="basis-3/12 text-center">Subtotal</div>
                        <div className="basis-3/12 text-center">${totalCost}</div>
                </div>
                <div className="flex flex-col md:flex-row text-gray-200 tracking-widest mt-10 w-full
                         pl-6 md:h-20 overflow-hidden justify-between items-center">
                        <div className="md:basis-6/12 p-5 md:mr-80 text-center hover:bg-[#464646]
                                bg-[#323232] hover:cursor-pointer rounded-md transition-all
                                duration-200 mb-4 md:mb-0 md:text-base text-[12px] md:max-w-72 w-2/3 h-auto" onClick={handleGoingBackToHome}>
                            {"Back to Shopping".toUpperCase()}
                        </div>
                        <div className="md:basis-6/12 p-5 text-center text-black font-bold
                                bg-gray-200 hover:bg-gray-300 rounded-md transition-all
                                duration-200 mb-2 md:mb-0 md:text-base text-[12px] md:max-w-72 w-2/3 h-auto" onClick={handleCheckout}>
                            {"Checkout".toUpperCase()}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CartTab;