import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import onLoginSubmit from '../APIs/loginAPI';
import fetchNotes from '../APIs/notesAPI';


function LoginForm({setIsLoginOpen, setIsRegisterOpen, setUserlogged,
                    setUserEmail,invalidCredentials, setInvalidCredentials,
                    setNotes, setUserId}){

    let redText = "Incorrect Email or Password";
    const formRef = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function disappearUserForm(){
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
      }
    
    const handleOutsideClick = (e) => {
        if (formRef.current &&!formRef.current.contains(e.target)) {
            disappearUserForm;
        }
    }
    
    async function handleLogin(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const [status, userId] = await onLoginSubmit(formData);
        console.log(status);
        console.log(userId);
        console.log(typeof(status));
        if(status === 200){
            setIsLoginOpen(false);
            setIsRegisterOpen(false);
            setUserlogged(true);
            setUserEmail(email.split('@')[0]);
            console.log(email);
            setUserId(userId);
            fetchNotes(setNotes, userId);
        }
        else if(status === 401 || status === 400){
            setInvalidCredentials(true);
            redText = "Incorrect Email or Password";
        }
        else if(status === 502){
            console.error('Internal Server Error or Bad Gateway');
            navigate('/badgateway');
        }
        else if(status === 500){
            console.error('Internal Server Error or Bad Gateway');
            navigate('/Server-error');
        }
        else if(status == 404){
            console.log('Not Found!')
            navigate('/404');
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
            // <div className="fixed inset-0 flex justify-center items-center z-50">
                <div ref={formRef} className="bg-white rounded-lg shadow-lg p-6 w-full">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                       <form onSubmit={(e) => handleLogin(e)}>
                            <p className={`text-red-500 mb-2 text-sm ${invalidCredentials ? 'visible' : 'text-transparent'} `}>
                                {redText}
                            </p>
                            <input 
                                type="email" 
                                name='email'
                                placeholder="Email"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mb-4 px-4 py-2 border rounded-lg"
                            />
                            <input 
                                type="password"
                                name='password' 
                                placeholder="Password"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mb-4 px-4 py-2 border rounded-lg"
                            />
                            <button 
                                type="submit" 
                                className="w-full bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-400"
                                onClick={() => {if(email.length == 0 || password.length == 0){
                                                    redText = "Email or Password cannot be empty";
                                                    setInvalidCredentials(true);
                                                    }
                                                else    setInvalidCredentials(false);}}
                            >
                            Login
                            </button>
                    </form>
                </div>
            // </div>
    );
}

export default LoginForm;