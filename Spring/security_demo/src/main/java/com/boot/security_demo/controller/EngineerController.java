package com.boot.security_demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
public class EngineerController {


    @GetMapping("/")
    public String home() {
    	return "home.jsp";
    }

}
