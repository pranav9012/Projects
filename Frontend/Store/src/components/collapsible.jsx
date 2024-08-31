import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Collapsible({title, content}){

    const[isCollapsed, setIsCollapsed] = useState(true);
    const prettyContent = content.split(/(?<=[a-z\)])\.(?=[A-Z])/);

    function toggleCollapse(){
        setIsCollapsed(!isCollapsed);
    }

    return(
        <div onClick={toggleCollapse}>
            <div className="mb-4 flex items-center justify-between pt-8 md:text-lg text-md
                    text-white focus:outline-none hover:cursor-pointer text-[14px]">
                <div className="tracking-widest">
                    {title.toUpperCase()}
                </div>
                <div className="transition-all duration-500 ease-in-out">
                    {isCollapsed ? <FontAwesomeIcon icon={faPlus} /> : <FontAwesomeIcon icon={faMinus} />}
                </div>
            </div>
            
            <div className={`overflow-y-hidden transition-all duration-500 
                ease-in-out ${isCollapsed ? 'max-h-0' : 'max-h-96'} text-md`}>
                <ul className="mt-2 list-disc list-outside leading-relaxed text-white tracking-widest">
                    {prettyContent.map((content, index) => {
                        return(
                            <div key={index} className="flex items-start justify-center">
                            <div className="bg-white w-2 h-2 rounded-full ml-3 mr-5 mt-3 p-1"></div>
                            <li className="mb-1 flex-grow">{content}</li>
                            </div>
                    )})}
                </ul>
            </div>
            <div className="w-full h-[1px] bg-gray-500 mt-4 mx-auto opacity-50 mb-4">
            </div>
        </div>
    )
}

export default Collapsible;