import React from "react";
import { useLocation } from "react-router-dom";
import Body from './body';

function CapTab(){
    const location = useLocation();
    const item = location.state;
    console.log(item);

    return(
        <Body CustomFilter={"Cap"}/>

    )
}

export default CapTab;