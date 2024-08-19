import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";

function DeletePage(note){

    function handleDeleteClick(id){
        // Delete the note here
        console.log('Deleting note:');
        console.log(note);
        const newNotesArray = note.notes.filter((n, index) => index !== id);
        note.setNotes(newNotesArray);
    };

    return(
        <FontAwesomeIcon icon={faTrash} className='self-end mb-2 text-red-400
                            scale-110 hover:cursor-pointer transform transition-transform
                            hover:animate-rotateLoop' onClick={ () => handleDeleteClick(note.id)}/>
    )
}

export default DeletePage;