package com.rest_demo.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;






@RestController
public class dataResource {

    @Autowired
    EmployeeRepo repo;

    @GetMapping(path="/", produces={"application/xml", "application/json"})    
    public List<Data> getAllData(){ 


        // ------------------------ Static Data -------------------------------
        // List<Data> DataSet = new ArrayList<>();
        // Data d1 = new Data("Pranav", 1, "Java Developer");
        // Data d2 = new Data("Sonika", 2, "Hardware Engineer");
        // Data d3 = new Data("Agir", 3, "Project Manager");

        // DataSet.add(d1);
        // DataSet.add(d2);
        // DataSet.add(d3);
        // ------------------------ Static Data -------------------------------

        // ------------------------ Postgres Data -------------------------------
        
        List<Data> DataSet = (List<Data>)repo.findAll();
        return DataSet;
    }

    @GetMapping("/employeeName/{name}")
    public Data getDataByName(@PathVariable String name) {

        return repo.findByName(name);
    }

    @GetMapping("/employee/{id}")
    public Optional<Data> getDataById(@PathVariable Integer id) {
        return repo.findById(id);
    }
    
    @PostMapping("addData")
    public Data addData(@RequestBody Data entity) {
        if(entity.getName() == null || entity.getName().trim().isEmpty()){
            throw new RuntimeException("Name cannot be null or empty");
        }

        repo.save(entity);
        return entity;
    }

    @DeleteMapping("delete/{id}")
    public List<Data> deleteById(@PathVariable Integer id) {
        repo.deleteById(id);
        return (List<Data>) repo.findAll();
    }
    
    
    @DeleteMapping("deleteName/{name}")
    public List<Data> deleteByName(@PathVariable String name) {
        repo.deleteByName(name);
        return (List<Data>) repo.findAll();
    }
    
}
