package com.project.jobpost.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.project.jobpost.service.PostService;

public interface PostRepository extends MongoRepository<PostService, Integer> {


}
