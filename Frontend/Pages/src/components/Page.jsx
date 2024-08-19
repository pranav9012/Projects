import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import ShowPages from './showPages';


function Page({notes, setNotes}){
    
    function handleAddClick(){
        console.log('Adding a new note...');
        const newnote = {heading: 'New Note', paragraph: 'This is a new note.'};
        setNotes([newnote, ...notes]);
    }

    return(
        <div className='mt-28 flex flex-wrap flex-row'>
            {notes.map((noteItem, index) =>
            <ShowPages 
                key={index}
                id={index}
                title={noteItem.heading}
                content={noteItem.paragraph}
                notes={notes}
                setNotes={setNotes}
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