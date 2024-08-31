import React from "react";
import returns_faq from "./returns";

function Return_FAQ(){
    return(
        <div className="flex items-center justify-center relative overflow-hidden">
            <div className="flex flex-col items-center justify-between mt-12 w-8/12 overflow-hidden">
                <div className="text-gray-200 md:text-5xl text-3xl text-center tracking-widest pl-6 overflow-hidden">
                    RETURNS & FAQ
                </div>
                <div className="mt-10 text-gray-200 md:text-lg text-base pl-6 overflow-hidden">
                    {returns_faq}
                </div>
            </div>
        </div>
    )
}

export default Return_FAQ;