import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import onRegisterSubmit from '../APIs/registerAPI';

function RegisterForm({setIsLoginOpen, setIsRegisterOpen, setUserlogged,
                        setUserEmail, invalidCredentials, setInvalidCredentials}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(true);
    const formRef = useRef(null);
    const navigate = useNavigate();


    useEffect(() =>{
        handlePasswordValidation();
    }, [password, confirmPassword]);

    function handlePasswordValidation(){
        if(password != confirmPassword){
            setPasswordError(true);
        }
        else{
            setPasswordError(false);
        }

        if(password.length == 0 || confirmPassword.length == 0){
            setEmptyPassword(true);
        }
        else{
            setEmptyPassword(false);
        }
    }

    function disappearUserForm(){
        setIsLoginOpen(false);
        setIsRegisterOpen(false);
    }

    
    async function handleRegistration(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const status = await onRegisterSubmit(formData);
        console.log(status);
        console.log(typeof(status));
        if(status === 201){
            setIsLoginOpen(false);
            setIsRegisterOpen(false);
            setUserlogged(true);
            setUserEmail(email.split('@')[0]);
            console.log(email);
        }
        else if(status === 400){
            setInvalidCredentials(true);
        }
        else if(status === 502){
            console.error('Internal Server Error or Bad Gateway');
            navigate('/badgateway');
        }
        else if(status === 500){
            console.error('Internal Server Error or Bad Gateway');
            navigate('/servererror');
        }

    }

    const handleOutsideClick = (e) =>{
        if (formRef.current &&!formRef.current.contains(e.target)) {
            disappearUserForm();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
            // <div className="fixed inset-0 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg shadow-lg p-6 w-[500px] h-[400px]">
                    <h2 className="text-2xl font-bold mb-4">Register</h2>
                       <form onSubmit={(e) => handleRegistration(e)}>
                            <p className={`text-red-500 mb-2 text-sm ${invalidCredentials ? 'visible' : 'text-transparent'} `}>
                                Email already registered
                            </p>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mb-4 px-4 py-2 border rounded-lg"
                            />
                            <input 
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)
                                }
                                className="w-full mb-4 px-4 py-2 border rounded-lg"
                            />
                            <input 
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)
                                }
                                className="w-full mb-4 px-4 py-2 border rounded-lg"
                            />
                            <p className={`text-red-500 mb-2 text-sm ${passwordError ? 'visible' : 'text-transparent'} `}>
                                Passwords do not match
                            </p>
                            <button 
                                type="submit" 
                                className={`w-full bg-yellow-500 text-white px-4
                                        py-2 rounded-lg ${emptyPassword || passwordError ? null : 'hover:bg-yellow-400'}
                                        ${emptyPassword || passwordError ? 'cursor-not-allowed' : null}`}
                                disabled={emptyPassword || passwordError}
                            >
                            Register
                            </button>
                    </form>
                </div>
            // </div>
    );
}

export default RegisterForm;