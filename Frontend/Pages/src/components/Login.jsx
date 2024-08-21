import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import init_notes from '../notes';


function LoginButtom({isLoginOpen, setIsLoginOpen, isRegisterOpen,
                    setIsRegisterOpen, userlogged, setUserlogged,
                    setNotes, userEmail, setUserEmail, setUserId}){


    function handleLoginBtn() {
        console.log("login button clicked");
        setIsLoginOpen(true);
        setIsRegisterOpen(false);
        // TO-DO make userlogged
    }

    function handleRegisterBtn() {
        console.log("register button clicked");
        setIsRegisterOpen(true);
        setIsLoginOpen(false);
        // TO-DO make user automatically login
    }

    async function handleLogoutBtn(){
        await setUserlogged(false);
        setNotes(init_notes);
        setUserEmail("");
        setUserId(-1);
        localStorage.clear();
        console.log("logout button clicked");
        // Reset invalid credentials status on logout
        // TO-DO reset other necessary state variables (if necessary)  e.g., notes, userId etc.
        // TO-DO remove any user-specific data from local storage (if necessary)
    }
    
    return(
        <div className='text-2xl mr-6 text-white flex flex-row justify-evenly
                            items-center'>
                {userlogged == true ? (<>
                <div className='flex flex-col justify-evenly items-center flex-1 hover:cursor-pointer'>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <p className='mx-2 text-sm'>{userEmail}</p>
                </div>
                <h2 className='ml-4 hover:cursor-pointer hover:text-gray-100' onClick={handleLogoutBtn}>Logout</h2>
                </>)
                :
                ( <>
                <h2 className='ml-4 hover:cursor-pointer hover:text-gray-100' onClick={handleLoginBtn}>Login</h2>
                <h2 className='ml-4 hover:cursor-pointer hover:text-gray-100' onClick={handleRegisterBtn}>Register</h2>
                </>)
                }
            </div>
    );
}

export default LoginButtom;