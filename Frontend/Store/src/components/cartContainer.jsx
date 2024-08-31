import React from "react";
import { useNavigate } from "react-router-dom";

function CartContainer({cartItems}){

    console.log(cartItems);
    const navigate = useNavigate();

    function handleItemClick(item){
        navigate(`/${item.store}/${item.title}`, {state: item.raw});
    }

    return cartItems.map((item, index) => {
        const key = `${item.title}-${item.color}-${item.size}`;
        return (
            <div key={key} className="flex text-gray-200 tracking-widest mt-10 w-full pl-2 md:pl-6 items-center">
                <div key={index} className="basis-7/12 md:basis-8/12 h-24 flex items-center just overflow-hidden">
                    <div className="w-16 md:w-24 h-24 overflow-hidden rounded-sm my-1 hover:cursor-pointer"
                            onClick={() => handleItemClick(item)}>
                        <img src={item.image} className="object-contain"/>
                    </div>
                    <div className="flex flex-col ml-2 md:ml-6 my-1 h-24">
                        <div className="pb-2 hover:cursor-pointer text-sm md:text-base" onClick={() => handleItemClick(item)}>
                            {item.title}
                        </div>
                        <div className="pb-2 text-sm md:text-base">{item.color_name[0].toUpperCase() + item.color_name.slice(1)
                                + ((item.category == 'Hoodie' || item.category == 'Sweatshirt') ? ", " + item.size : "")}</div>
                    </div>
                </div>
                <div className="basis-3/12 text-center text-sm md:text-base">{item.quantity}</div>
                <div className="basis-3/12 text-center text-sm md:text-base">${item.price}</div>
            </div>
        );
      })
}

export default CartContainer;