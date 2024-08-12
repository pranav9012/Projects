import { useRef, useState } from "react";

function EditableContent(content){

    const[paraEditMode, setparaEditMode] = useState(false);

    const paraeRef = useRef(null);

    function handleParaEditMode(){
        console.log(paraEditMode);
        setparaEditMode(!paraEditMode);
        setTimeout( () =>{
            if(paraeRef.current){
                paraeRef.current.focus();
            }
            },0);
    };

    return(
        <p className="font-extralight hover:cursor-pointer"
            contentEditable={paraEditMode}
            onDoubleClick={handleParaEditMode}
            onBlur={() => setparaEditMode(false)}
            suppressContentEditableWarning={true}>
        {content.content}
        </p>
    );
}

export default EditableContent;