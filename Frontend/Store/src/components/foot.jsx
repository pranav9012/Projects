import React from "react";
import { useNavigate } from "react-router-dom";

function Foot(){
    let year = new Date().getFullYear();
    const navigate = useNavigate();

    return(
    <div className="">
        <footer className="footer relative text-center mt-6 pb-10 bottom-0 w-full
                        flex flex-col justify-center items-start ml-20 font-serif">
            <div className="pb-4 flex flex-col md:flex-row flex-wrap">
                <a href="#" className="text-white transition duration-300 py-1
                            hover:text-gray-400" onClick={() => navigate('/returns-faq')}>
                                Returns & FAQ
                </a>
                <a href="#" className="ml-4 text-white transition duration-300 py-1
                            hover:text-gray-400" onClick={() => navigate('/contact-me')}>
                                Contact
                </a>
                <a href="#" className="ml-4 text-white transition duration-300 py-1
                            hover:text-gray-400" onClick={() => navigate('/privacy-policy')}>
                                Privacy Policy
                </a>
                <a href="#" className="ml-4 text-white transition duration-300 py-1
                            hover:text-gray-400" onClick={() => navigate('terms-of-service')}>
                                Terms of Service
                </a>
            </div>
            <p className="text-gray-400"> ⓒ {year} 龙鳞. All rights reserved.</p>
        </footer>
    </div>
    )
}

export default Foot;