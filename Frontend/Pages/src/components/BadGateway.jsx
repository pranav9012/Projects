import React from 'react';
import Header from './Header';
import ShowPages from './showPages';

const note = {
    heading: 'Bad Gateway',
    paragraph: 'Oops, something went wrong. Please try again later.',
    id: 0
}
function BadGateway(){
    return(
        <div className='flex flex-col min-h-screen relative'>
            <div className="flex flex-row bg-amber-400 p-5 shadow-lg relative 
                            z-10 -mb-24 justify-between grow-0">
                <Header />
            </div>
            <div className='mt-52 flex flex-wrap flex-row scale-150 justify-center items-center'>
                <ShowPages
                    key={1}
                    id={1}
                    title={note.heading}
                    content={note.paragraph}
                />
            </div>
        </div>
    );
}

export default BadGateway;