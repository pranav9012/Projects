import { useRef, useState } from "react";
function EditableContent(content){

    const[paraEditMode, setparaEditMode] = useState(false);

    const paraeRef = useRef(null);

    function handleParaEditMode(){
        console.log(paraEditMode);
        // setparaEditMode(!paraEditMode);
        setTimeout( () =>{
            if(paraeRef.current){
                paraeRef.current.focus();
            }
            },0);
    };

    return(
        <p className="font-extralight overflow-y-auto hover:cursor-pointer focus:p-1 focus:outline-slate-400
                     scroll-smooth scroll caret-slate-400 scrollbar-thumb-rounded-lg scrollbar-thumb-dark scrollbar pr-4"
            contentEditable={true}
            onClick={handleParaEditMode}
            onBlur={() => setparaEditMode(false)}
            suppressContentEditableWarning={true}>
        {content.content}
        </p>
    );
}

export default EditableContent;