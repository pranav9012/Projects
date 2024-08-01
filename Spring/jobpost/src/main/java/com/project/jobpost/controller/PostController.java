package com.project.jobpost.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.jobpost.repo.PostRepository;
import com.project.jobpost.repo.SearchRepositoryImpl;
import com.project.jobpost.service.PostService;



@RestController
@CrossOrigin(origins = "*")
public class PostController {

    @Autowired
    PostRepository repo;
    @Autowired
    SearchRepositoryImpl srepo;

    @GetMapping(value = "jobPosts", produces = {"application/xml", "application/json"})
    public List<PostService> getAllJobs() {

        return repo.findAll();
    }

    @GetMapping(value = "search/{text}",  produces = {"application/xml", "application/json"})
    public List<PostService> search(@PathVariable String text) {
        
        return srepo.findByText(text);
    }
    

    @PostMapping(value = "/postJob", produces = {"application/xml", "application/json"}, consumes = {"application/xml", "application/json"})
    public PostService postJob(@RequestBody PostService job) {
        
        // Make sure to add Content Type and Accept in HTTPRequest Header
        // and Include mvn jackson XML for XML support
        return repo.save(job);
    }
    
    

}
