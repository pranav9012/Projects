package com.boot.spring_mvc.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.spring_mvc.model.Engineer;

public interface EngineerRepo extends JpaRepository<Engineer, Integer>{
    // Ignore case cuz can't enter uppercase in url and First alph is capital
    // in db.
    // or just use a form insted of url
    List<Engineer> findByNameIgnoreCase(String name);

}
