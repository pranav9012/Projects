package com.spring.pages.exceptions;

public class RemoteException extends Exception{
    
    public RemoteException(String message){
        super(message);
    }

    public RemoteException(String message, Throwable cause){
        super(message, cause);
    }

}
