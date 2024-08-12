import React from "react";
import DeletePage from './showPagesDelete';
import EditableContent from "./showPagesPara";
import EditableTitle from './showPagesTitle';

function showPages(note){

    return(
        <div className="bg-white m-5 p-5 rounded-lg shadow-md
                         shadow-gray-400 page float-left flex flex-col hover:bg-gray-50
                        hover:scale-110 transition duration-300 min-h-52">
            <DeletePage {...note}/>
            <EditableTitle title={note.title}/>
            <EditableContent content={note.content} />
           
        </div>
    );
}

export default showPages;