package com.spring.pages.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.pages.model.Users;

@Repository
public interface userRepo extends JpaRepository<Users, Integer>{
    public Users findByEmail(String email);
}
