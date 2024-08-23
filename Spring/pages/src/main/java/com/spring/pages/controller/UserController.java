package com.spring.pages.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.pages.exceptions.RemoteException;
import com.spring.pages.exceptions.UserAlreadyRegisteredException;
import com.spring.pages.model.Users;
import com.spring.pages.service.PagesService;
import com.spring.pages.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserService service;
    
    @Autowired
    private PagesService pService;
    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@ModelAttribute Users user, Model model){
        model.addAttribute("user", user);
        System.out.println("User: " + user);  // for logging purpose only, remove it in production code.
        Map<String, Object> res = new HashMap<>();
        try {
            service.register(user);
            int user_id = service.getUserId(user);
            System.out.println(user_id);
            res.put("message", "Registration successful");
            res.put("user_id", user_id);
            pService.firstNote(user_id);
            return ResponseEntity.status(HttpStatus.CREATED).body(res); // 200 OK
        } catch (UserAlreadyRegisteredException e) {
            res.put("message", "User already registered");
            res.put("user_id", -1);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(res); // 400 Bad Request
        } catch (Exception e) {
            if (e instanceof RemoteException) {
                res.put("message", "Bad Gateway");
            res.put("user_id", -1);
                return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(res); // 502 Bad Gateway
            } else {
                res.put("message", "Internal server error");
            res.put("user_id", -1);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res); // 500 Internal Server Error
            }
        }
    }
}
