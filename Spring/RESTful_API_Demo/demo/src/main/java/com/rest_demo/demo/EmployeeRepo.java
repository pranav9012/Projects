package com.rest_demo.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Data, Integer> {

    Data findByName(String name);

    void deleteByName(String name);

}
