package com.boot.security_demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.boot.security_demo.model.UserPrincipal;
import com.boot.security_demo.model.Users;
import com.boot.security_demo.repo.userRepo;

@Service
public class MyUserDetailsService implements UserDetailsService{

    @Autowired
    private userRepo repo;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // TODO Auto-generated method stub
        Users user = repo.findByUsername(username);
        
        if(user == null){
            System.out.println("User not found");
            throw new UsernameNotFoundException("User not found");
        }
        
        return new UserPrincipal(user);
    }

}
