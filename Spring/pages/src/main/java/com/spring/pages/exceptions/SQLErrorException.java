package com.spring.pages.exceptions;

public class SQLErrorException extends Exception{

    public SQLErrorException(String message){
        super(message);
    }

    public SQLErrorException(String message, Throwable cause){
        super(message, cause);
    }
}