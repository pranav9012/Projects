import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { useNavigate } from "react-router-dom";

function Cart({openCart, newItemAdded}){

    const navigate = useNavigate();
    function handleCartClick(){
        openCart();
        console.log(1);
        navigate('/cart');

    }

    return(
        <div className="relative flex hover:cursor-pointer">
            <div className="relative text-3xl cart cart-fill text-start px-2 mr-2 
                    transition duration-500 text-white hover:text-black"
                    onClick={handleCartClick}>
                <FontAwesomeIcon icon={faBagShopping} className=""/>
            </div>
            <div className={`relative bg-red-600 w-3 h-3 rounded-full -left-4
                    transition-opacity duration-150 ${newItemAdded ? 'opacity-100' : 'opacity-0'}`}>
            </div>
        </div>
    )
}

export default Cart;