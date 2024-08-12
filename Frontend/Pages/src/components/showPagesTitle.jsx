import React, { useRef, useState } from "react";


function EditableTitle(title){

    const[titleEditMode, setTitleEditMode] = useState(false);
    const titleRef = useRef(null);

    function handleTitleEditMode(){
        console.log(titleEditMode);
        setTitleEditMode(!titleEditMode);
        setTimeout( () =>{
            if(titleRef.current){
                titleRef.current.focus();
            }
            },0);
    };

    return(
        <h2 className={`text-2xl font-normal mb-4 ${titleEditMode ? 'focus:outline-none border-b-2' : 'hover:cursor-pointer underline underline-offset-4'}`}
                contentEditable={titleEditMode}
                onDoubleClick={handleTitleEditMode}
                onBlur={() => setTitleEditMode(false)}
                suppressContentEditableWarning={true}>
        {title.title}
        </h2>
    );

}

export default EditableTitle;