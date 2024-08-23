package com.spring.pages.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.pages.exceptions.RemoteException;
import com.spring.pages.model.Pages;
import com.spring.pages.service.PagesService;



@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PagesController {

    @Autowired
    private PagesService service;

    @GetMapping("/notes/{user_id}")
    public ResponseEntity<Map<String, List<Pages>>> fetchNotes(@PathVariable int user_id) {
        System.out.println("user_id :" + user_id);
        Map<String, List<Pages>> res = new HashMap<>();
        try{
            List<Pages> pages = service.getNotes(user_id);
            for(Pages p : pages){
                p.toString();
            }
            res.put("pages", pages);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e){
            System.out.println(e);
            List<Pages> Epages = new ArrayList<>();
            Pages errorPage = new Pages(user_id, "Error", "Failed to retrive data");
            Epages.add(errorPage);
            for(Pages p : Epages){
                p.toString();
            }
            res.put("pages", Epages);
            return ResponseEntity.ok(res);
        }
    }

    @PostMapping("/addnote/{user_id}")
    public ResponseEntity<Map<String, Object>> addNote(@RequestBody Pages pages, @PathVariable int user_id){
        Map<String, Object> res = new HashMap<>();
        pages.toString();
        try{
            service.addNote(pages, user_id);
            res.put("message", "Note added");
            return ResponseEntity.status(HttpStatus.CREATED).body(res);
        } catch (Exception e){
            if(e instanceof RemoteException){
                res.put("message", "Bad Gateway");
                return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(res);
            } else {
                res.put("message", "Internal server error");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
            }
        }
    }

    @DeleteMapping("/deletenote/{user_id}/{page_id}")
    public ResponseEntity<Map<String, Object>>  deleteNote(@PathVariable int user_id, @PathVariable int page_id){
        Map<String, Object> res = new HashMap<>();
        System.out.println(user_id + "   " + page_id);
        try{
            service.deleteNote(user_id, page_id);
            res.put("message", "Note deleted");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e){
            if(e instanceof RemoteException){
                res.put("message", "Bad Gateway");
                return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(res);
            } else{
                res.put("message", "Internal server error");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
            }
        }
    }

    @PatchMapping("/updatetitle/{user_id}/{page_id}")
    public ResponseEntity<Map<String, Object>> updateTitle(@PathVariable int user_id, @PathVariable int page_id, @RequestBody Pages page){
        Map<String, Object> res = new HashMap<>();
        System.out.println(user_id + "   " + page_id + "   " + page);
        try{
            service.updateTitle(user_id, page_id, page.getTitle());
            res.put("message", "Title updated");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e){
            if(e instanceof RemoteException){
                res.put("message", "Bad Gateway");
                return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(res);
            } else{
                res.put("message", "Internal server error");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
            }
        }
    }

    @PatchMapping("/updatecontent/{user_id}/{page_id}")
    public ResponseEntity<Map<String, Object>> updateContent(@PathVariable int user_id, @PathVariable int page_id, @RequestBody Pages page){
        Map<String, Object> res = new HashMap<>();
        System.out.println(user_id + "   " + page_id + "   " + page);
        try{
            service.updateContent(user_id, page_id, page.getContent());
            res.put("message", "Content updated");
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e){
            if(e instanceof RemoteException){
                res.put("message", "Bad Gateway");
                return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(res);
            } else{
                res.put("message", "Internal server error");
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
            }
        }
    }
    
}
