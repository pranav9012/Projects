import React from "react";
import { Outlet } from "react-router-dom";
import Foot from './foot';
import Head from './head';

function Layout({openCart, newItemAdded}){
    return(
    <div className="flex flex-col min-h-screen w-full">
        <Head openCart={openCart} newItemAdded={newItemAdded}/>
        <Outlet />
        <Foot />
    </div>
    )
}

export default Layout;