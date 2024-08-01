package com.project.jobpost.service;

import java.util.Arrays;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "springboot")
public class PostService {

    private String title;
    private String description;
    private String exp;
    private String[] tech;
    public PostService() {
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getExp() {
        return exp;
    }
    public void setExp(String exp) {
        this.exp = exp;
    }
    public String[] getTech() {
        return tech;
    }
    public void setTech(String[] tech) {
        this.tech = tech;
    }
    @Override
    public String toString() {
        return "PostService [title=" + title + ", description=" + description + ", exp=" + exp + ", tech="
                + Arrays.toString(tech) + "]";
    }
    
    
    
}
