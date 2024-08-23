package com.spring.pages.model;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Pages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int page_id;
    private int user_id;
    private String title;
    private String content;
     @Column(updatable = false, insertable = false)
    private Timestamp created_at;
    @Column(updatable = false, insertable = false)
    private Timestamp edited_at;

    

    public Pages() {
    }
    public Pages(int user_id, String title, String content) {
        this.user_id = user_id;
        this.title = title;
        this.content = content;
    }
    public int getPage_id() {
        return page_id;
    }
    public void setPage_id(int page_id) {
        this.page_id = page_id;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public Timestamp getCreated_at() {
        return created_at;
    }
    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }
    public Timestamp getEdited_at() {
        return edited_at;
    }
    public void setEdited_at(Timestamp edited_at) {
        this.edited_at = edited_at;
    }
    @Override
    public String toString() {
        return "Pages [page_id=" + page_id + ", user=" + user_id + ", title=" + title + ", content=" + content
                + ", created_at=" + created_at + ", edited_at=" + edited_at + "]";
    }
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    

}
