import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchNotes, { updateContent } from "../APIs/notesAPI";

function EditableContent(note){

    const[paraEditMode, setparaEditMode] = useState(false);
    const[currentContent, setCurrentContent] = useState(note.content);
    const paraRef = useRef(null);
    const navigate = useNavigate();

    function handleParaEditMode(){
        console.log(paraEditMode);
        setparaEditMode(true);
        // setTimeout( () =>{
        //     if(paraeRef.current){
        //         paraeRef.current.focus();
        //     }
        //     },0);
    };

    function handleContentChange(e){
        setCurrentContent(e.target.textContent);
    }

    async function handleBlur(){
        setparaEditMode(false);
        note.notes[note.id - 1].content = currentContent;
        // console.log(note.notes[note.id - 1].content);
        console.log(note.notes[note.id - 1]);
        note.setNotes(note.notes);
        console.log(note.notes);
        if(note.userlogged){
            const status = await updateContent(note.id, note.userId, currentContent);
            console.log(status);
            if(status === 200){
                console.log("Note's content updated successfully");
                await fetchNotes(note.setNotes, note.userId)
            }
            else if(status == 502){
                navigate('/Server-error');
            }
            else if(status == 500){
                navigate('/badgateway');
            }
            else if(status === 404){
                navigate('/404');
            }
        }
    }

    useEffect(() =>{
        if(paraEditMode && paraRef.current){
            paraRef.current.focus();
        }
    }, [paraEditMode]);

    return(
        <p className="font-extralight overflow-y-auto hover:cursor-pointer focus:p-1 focus:outline-slate-400
                     scroll-smooth scroll caret-slate-400 scrollbar-thumb-rounded-lg scrollbar-thumb-dark scrollbar pr-4"
            contentEditable={true}
            onClick={handleParaEditMode}
            onInput={handleContentChange}
            onBlur={handleBlur}
            suppressContentEditableWarning={true}
            ref={paraRef}>
        {note.content}
        </p>
    );
}

export default EditableContent;