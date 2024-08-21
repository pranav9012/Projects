import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { useNavigate } from 'react-router-dom';
import fetchNotes, { deleteNote } from '../APIs/notesAPI';

function DeletePage(note){

    const navigate = useNavigate();

    async function handleDeleteClick(id){
        // Delete the note here
        console.log('Deleting note:');
        console.log(note);
        const newNotesArray = note.notes.filter((n, index) => (index + 1) !== id);
        note.setNotes(newNotesArray);
        if(note.userlogged){
            const status = await deleteNote(note.id, note.userId);
            if(status === 200){
                console.log('Note deleted  successfully');
                await fetchNotes(note.setNotes, note.userId)
            }
            else if(status == 502){
                navigate('/Server-error');
            }
            else if(status == 500){
                navigate('/badgateway');
            }
            else if(status == 400){
                navigate('/404');
            }
        }
    };

    return(
        <FontAwesomeIcon icon={faTrash} className='self-end mb-2 text-red-400
                            scale-110 hover:cursor-pointer transform transition-transform
                            hover:animate-rotateLoop' onClick={ () => handleDeleteClick(note.id)}/>
    )
}

export default DeletePage;