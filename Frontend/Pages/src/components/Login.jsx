import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";


function LoginButtom({isLoginOpen, setIsLoginOpen, isRegisterOpen,
                    setIsRegisterOpen, userlogged, setUserlogged,
                    userEmail}){



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
    
    return(
        <div className='text-2xl mr-6 text-white flex flex-row justify-evenly
                            items-center'>
                {userlogged ? <>
                <div className='flex flex-col justify-evenly items-center flex-1 hover:cursor-pointer'>
                    <div>
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <p className='mx-2 text-sm'>{userEmail}</p>
                </div>
                <h2 className='ml-4 hover:cursor-pointer hover:text-gray-100'>Logout</h2>
                </>
                :
                <>
                <h2 className='ml-4 hover:cursor-pointer hover:text-gray-100' onClick={handleLoginBtn}>Login</h2>
                <h2 className='ml-4 hover:cursor-pointer hover:text-gray-100' onClick={handleRegisterBtn}>Register</h2>
                </>
                }
            </div>
    );
}

export default LoginButtom;