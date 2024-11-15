package com.project.jobpost.repo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Component;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.project.jobpost.service.PostService;

@Component
public class SearchRepositoryImpl implements SearchRepository{

    @Autowired
    MongoClient mongoClient;
    @Autowired
    MongoConverter converter;
    @Override
    public List<PostService> findByText(String text) {

        final List<PostService> posts = new ArrayList<>();
        MongoDatabase database = mongoClient.getDatabase("joblisting");
        MongoCollection<Document> collection = database.getCollection("springboot");
        AggregateIterable<Document> result = collection.aggregate(Arrays.asList(new Document("$search", 
                                                                new Document("text", 
                                                                new Document("query", text)
                                                                .append("path", Arrays.asList("tech", "description", "title")))), 
                                                                new Document("$sort", 
                                                                new Document("exp", 1L)), 
                                                                new Document("$limit", 5L)));
        result.forEach(doc -> posts.add(converter.read(PostService.class, doc)));
        return posts;
    }
}
