import React from "react";
import { useLocation } from "react-router-dom";
import Body from './body';

function BottleTab(){
    const location = useLocation();
    const item = location.state;
    console.log(item);

    return(
        <Body CustomFilter={"Bottle"}/>

    )
}

export default BottleTab;