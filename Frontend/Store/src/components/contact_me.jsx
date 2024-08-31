import React from "react";

function ContactMe(){
    return(
        <div className="flex items-center justify-center relative overflow-hidden">
            <div className="flex flex-col items-center justify-between mt-12 w-8/12 overflow-hidden">
                <div className="text-gray-200 md:text-5xl text-3xl text-center tracking-widest pl-6 overflow-hidden">
                    CONTACT ME
                </div>
                <div className="mt-10 text-gray-200  md:text-lg text-base pl-6 overflow-hidden">
                    <span>For all store inquiries, contact </span><span className="underline underline-offset-4">loong@scales.store@demo.com</span>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;