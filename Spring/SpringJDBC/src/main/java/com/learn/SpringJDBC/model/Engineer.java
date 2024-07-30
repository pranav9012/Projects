package com.learn.SpringJDBC.model;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

// default singleton creates only 1 onj and every ref points to same obj
// prototype will give new obj to every ref
@Component
@Scope("prototype")
public class Engineer {
	
	private int id;
	private String name;
	private String designation;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesignation() {
		return designation;
	}
	public void setDesignation(String designation) {
		this.designation = designation;
	}
	@Override
	public String toString() {
		return "Engineer [id=" + id + ", name=" + name + ", designation=" + designation + "]";
	}
	
	

}
