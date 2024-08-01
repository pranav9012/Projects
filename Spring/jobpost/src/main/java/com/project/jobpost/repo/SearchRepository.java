package com.project.jobpost.repo;

import java.util.List;

import com.project.jobpost.service.PostService;

public interface SearchRepository {
    
    List<PostService> findByText(String text);
}
