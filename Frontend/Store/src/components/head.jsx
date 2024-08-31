import React from 'react';
import Cart from './head/cart';
import Logo from './head/logo';
import Navbar from './head/navbar';

function head({openCart, newItemAdded}){

    return(
        <div className='flex flex-row relative max-w-full justify-between items-center bg-black z-10'>
            <div className='max-w-60 px-5'><Logo /></div>
            <div className='md:w-5/6 px-5 order-first md:order-none'><Navbar /></div>
            <div className='max-w-36 p-5'><Cart openCart={openCart} newItemAdded={newItemAdded}/></div>
        </div>
    )
}

export default head;