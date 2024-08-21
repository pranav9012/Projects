import React, { useEffect, useState } from 'react';
import init_notes from '../notes.js';
import Footer from './Footer';
import Header from './Header';
import UserHandling from "./Login";
import LoginForm from './LoginForm';
import Page from './Page';
import RegisterForm from './RegisterForm';

function Home(){
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [userlogged, setUserlogged] = useState(false);
    const [triggerAnimation, setTriggerAnimation] = useState(true);
    const [notes, setNotes] = useState(init_notes)
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const [userEmail, setUserEmail] = useState("guest");
    const [userId, setUserId] = useState(-1);

    useEffect(() => {
        if (isLoginOpen || isRegisterOpen) {
        setTriggerAnimation(true);  // Trigger fade-in animation
        } else {
        setTriggerAnimation(false); // Trigger fade-out animation
        }
    }, [isLoginOpen, isRegisterOpen]);

    function disappearUserForm(){
        setTriggerAnimation(false);
        setTimeout(() => {
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
        setInvalidCredentials(false);
        }, 190);
    }

    return (
        <div className='flex flex-col min-h-screen relative'>
        <div className="flex flex-row bg-amber-400 p-5 shadow-lg relative 
                        z-10 -mb-24 justify-between grow-0">
            <Header />
            <UserHandling 
            isLoginOpen={isLoginOpen}
            setIsLoginOpen={setIsLoginOpen} 
            isRegisterOpen={isRegisterOpen}
            setIsRegisterOpen={setIsRegisterOpen}
            userlogged={userlogged}
            setUserlogged={setUserlogged}
            setNotes={setNotes}
            userEmail={userEmail}
            setUserEmail={setUserEmail}
            setUserId={setUserlogged}
            />
        </div>
        {isLoginOpen || isRegisterOpen ?
            <div className={`fixed inset-0 h-screen w-screen bg-black bg-opacity-50 backdrop-blur-sm z-40
                            flex justify-center items-center transition 
                            ${triggerAnimation ? 'animate-fade' : 'animate-fadeOut'}`}
                onClick={disappearUserForm}>
            <div className='z-50' onClick={(e) => e.stopPropagation()}>
                {isLoginOpen ? <LoginForm           
                                setIsLoginOpen={setIsLoginOpen} 
                                setIsRegisterOpen={setIsRegisterOpen}
                                setUserlogged={setUserlogged}
                                setUserEmail={setUserEmail}
                                invalidCredentials={invalidCredentials}
                                setInvalidCredentials={setInvalidCredentials}
                                setNotes={setNotes}
                                setUserId={setUserId}
                                /> : null}
                {isRegisterOpen ? <RegisterForm 
                                    setIsLoginOpen={setIsLoginOpen} 
                                    setIsRegisterOpen={setIsRegisterOpen}
                                    setUserlogged={setUserlogged}
                                    setUserEmail={setUserEmail}
                                    invalidCredentials={invalidCredentials}
                                    setInvalidCredentials={setInvalidCredentials}
                                    setNotes={setNotes}
                                    setUserId={setUserId}
                                    /> : null}
            </div>
            </div>
        : null}
        <Page 
            notes={notes}
            setNotes={setNotes}
            userId={userId}
            userlogged={userlogged}
        />
        <Footer />
        </div>
    );
    }

export default Home;