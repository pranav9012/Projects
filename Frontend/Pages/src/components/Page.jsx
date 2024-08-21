import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import { useNavigate } from 'react-router-dom';
import fetchNotes, { addNote } from '../APIs/notesAPI';
import ShowPages from './showPages';


function Page({notes, setNotes, userId, userlogged}){
    
    const navigate = useNavigate();

    async function handleAddClick(){
        console.log('Adding a new note...');
        const newnote = {title: 'New Note', content: 'This is a new note.'};
        setNotes([newnote, ...notes]);
        if(userlogged) {
            const status = await addNote(newnote, userId);
            
            if(status === 201){
                console.log('Note added successfully');
                await fetchNotes(setNotes, userId)
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

    return(
        <div className='mt-28 flex flex-wrap flex-row'>
            {notes.map((noteItem, index) =>
            <ShowPages 
                key={index + 1}
                id={index + 1}
                title={noteItem.title}
                content={noteItem.content}
                notes={notes}
                setNotes={setNotes}
                userId={userId}
                userlogged={userlogged}
            />)}
            <div className='z-20 fixed bottom-4 right-7 mb-6 scale-150
                            bg-amber-400 rounded-full mr-4 w-12 h-12 flex 
                            justify-center items-center shadow-md hover:ring-2 
                            ring-offset-2 ring-white transition duration-200
                            hover:rotate-90 cursor-pointer' onClick={handleAddClick}>
                <FontAwesomeIcon icon={faPlus} style={{color: "#ffffff",}}
                                className='text-3xl'/>
            </div>
        </div>
    );
}

export default Page;