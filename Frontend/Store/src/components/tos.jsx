import React from "react";
import tos from "./tos";

function Terms_of_Service(){
    return(
        <div className="flex items-center justify-center relative overflow-hidden">
            <div className="flex flex-col items-center justify-between mt-12 w-8/12 overflow-hidden">
                <div className="text-gray-200 md:text-5xl text-3xl text-center tracking-widest pl-6 overflow-hidden">
                    TERMS OF SERVICE
                </div>
                <div className="mt-10 text-gray-200 md:text-lg text-base pl-6 overflow-hidden">
                    {tos}
                </div>
            </div>
        </div>
    )
}

export default Terms_of_Service;