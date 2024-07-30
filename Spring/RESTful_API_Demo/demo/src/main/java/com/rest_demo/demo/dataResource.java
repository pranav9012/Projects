package com.rest_demo.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;




@RestController
public class dataResource {

    @Autowired
    EmployeeRepo repo;

    @GetMapping(path="allData", produces={"application/xml, application/json"})    
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

    @PostMapping("addData")
    public Data addData(@RequestBody Data entity) {
        if(entity.getName() == null || entity.getName().trim().isEmpty()){
            throw new RuntimeException("Name cannot be null or empty");
        }

        repo.save(entity);
        return entity;
        

    }
    
}
