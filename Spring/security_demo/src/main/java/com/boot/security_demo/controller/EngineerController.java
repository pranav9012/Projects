package com.boot.security_demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;


@RestController
public class EngineerController {


    @GetMapping("/")
    public String home(HttpServletRequest request) {
        String session_id = "Hello from Home" + "\n" + request.getSession().getId();
    	return session_id;
    }

}
