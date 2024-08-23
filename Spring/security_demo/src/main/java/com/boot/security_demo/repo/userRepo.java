package com.boot.security_demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.boot.security_demo.model.Users;

@Repository
public interface userRepo extends JpaRepository<Users, Integer>{

    public Users findByUsername(String username);

}
