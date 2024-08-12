import React from "react";

function Footer(){
    let year = new Date().getFullYear();
    return(
        <div className="pt-20">
        <footer className="footer absolute text-center mt-6 pb-4 bottom-0 w-full">
            <p className="text-gray-400"> ⓒ {year} Pages. All rights reserved.</p>
        </footer>
        </div>
    );
}

export default Footer;