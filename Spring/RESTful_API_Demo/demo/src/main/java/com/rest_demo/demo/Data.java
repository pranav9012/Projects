package com.rest_demo.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// Make this database entity
@Entity
@Table(name ="employee")
public class Data {
    private String name;
    // Make id the Primary Key
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    private String designation;
    
    public Data()   {}

    public Data(String name, int id, String designation) {
        this.name = name;
        this.id = id;
        this.designation = designation;
    }


    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDesignation() {
        return this.designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    @Override
    public String toString() {
        return "{" +
            " name='" + getName() + "'" +
            ", id='" + getId() + "'" +
            ", designation='" + getDesignation() + "'" +
            "}";
    }

}
