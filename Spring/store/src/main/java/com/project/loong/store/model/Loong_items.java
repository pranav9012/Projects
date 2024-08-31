package com.project.loong.store.model;

import java.util.Arrays;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Loong_items {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String title;
    private String[] image;
    private String[] color_name;
    private String[] color;
    private float cost;
    private String category;
    private String store;
    private String description;

    
    public Loong_items() {
    }

    public Loong_items(String title, String[] image, String[] color_name, String[] color, float cost, String category,
            String store, String description) {
        this.title = title;
        this.image = image;
        this.color_name = color_name;
        this.color = color;
        this.cost = cost;
        this.category = category;
        this.store = store;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String[] getImage() {
        return image;
    }

    public void setImage(String[] image) {
        this.image = image;
    }

    public String[] getColor_name() {
        return color_name;
    }

    public void setColor_name(String[] color_name) {
        this.color_name = color_name;
    }

    public String[] getColor() {
        return color;
    }

    public void setColor(String[] color) {
        this.color = color;
    }

    public float getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getStore() {
        return store;
    }

    public void setStore(String store) {
        this.store = store;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Loong_items [id=" + id + ", title=" + title + ", image=" + Arrays.toString(image) + ", color_name="
                + Arrays.toString(color_name) + ", color=" + Arrays.toString(color) + ", cost=" + cost + ", category="
                + category + ", store=" + store + ", description=" + description + "]";
    }
    
}
