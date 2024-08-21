import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchNotes, { updateTitle } from "../APIs/notesAPI";


function EditableTitle(note){

    const[titleEditMode, setTitleEditMode] = useState(false);
    const [currentTitle , setCurrentTitle] = useState(note.title);
    const titleRef = useRef(null);
    const navigate = useNavigate();

    function handleTitleEditMode(){
        console.log(titleEditMode);
        setTitleEditMode(true);
        // setTimeout( () =>{
        //     if(titleRef.current){
        //         titleRef.current.focus();
        //     }
        //     },0);
    };

    function handleTitleChange(e){
        setCurrentTitle(e.target.innerText);
        // console.log(currentTitle);
    }

    async function handleBlur(){
        setTitleEditMode(false);
        note.notes[note.id - 1].title = currentTitle;
        // console.log(note.notes[note.id - 1].title);
        console.log(note.notes[note.id - 1]);
        note.setNotes(note.notes);
        console.log(note.notes);
        if(note.userlogged){
            const status = await updateTitle(note.id, note.userId, currentTitle);;
            if(status === 200){
                console.log("Note's title updated successfully");
                await fetchNotes(note.setNotes, note.userId)
            }
            else if(status == 502){
                navigate('/Server-error');
            }
            else if(status == 500){
                navigate('/badgateway');
            }
            else if(status == 404){
                navigate('/404');
            }
        }
    }

    useEffect(() => {
        if(titleEditMode && titleRef.current){
            titleRef.current.focus();
        }
    }, [titleEditMode]);

    return(
        // <h2 className={`text-2xl font-normal mb-4 ${titleEditMode ? 'focus:outline-none border-b-2' : 'hover:cursor-pointer underline underline-offset-4'}`}
        <h2 className="text-2xl font-normal mb-4 underline underline-offset-4 hover:cursor-pointer
                        focus:font-light focus:outline-none focus:border-b-2 focus:no-underline"
            contentEditable={true}
            onClick={handleTitleEditMode}
            onInput={handleTitleChange}
            onBlur={handleBlur}
            suppressContentEditableWarning={true}
            ref={titleRef}>
        {note.title}
        </h2>
    );

}

export default EditableTitle;