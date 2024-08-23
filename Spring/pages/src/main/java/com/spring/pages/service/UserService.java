package com.spring.pages.service;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.spring.pages.exceptions.UserAlreadyRegisteredException;
import com.spring.pages.model.Users;
import com.spring.pages.repo.userRepo;

@Service
public class UserService implements UserDetailsService{

    @Autowired
    private userRepo repo;

    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    public Users register(Users user) throws UserAlreadyRegisteredException, BadRequestException{
        if(repo.findByEmail(user.getEmail()) != null)   throw new UserAlreadyRegisteredException("User already registered");
        if(user.getPassword() == null || user.getPassword().trim().isEmpty()) throw new BadRequestException("Password is required");
        user.setPassword(encoder.encode(user.getPassword()));
        return repo.save(user);
    }

    public int getUserId(Users user) throws UsernameNotFoundException, BadRequestException{
        if(user.getEmail() == "" || user.getEmail().trim().isEmpty()) throw new BadRequestException("Email cannot be empty");
        Users foundUsers = repo.findByEmail(user.getEmail());
        if(foundUsers == null) throw new UsernameNotFoundException("Email not found");
        return foundUsers.getUser_id();
    }

    public int getIdByEmail(String email) throws UsernameNotFoundException, BadRequestException{
        if(email == "" || email.trim().isEmpty()) throw new BadRequestException("Email cannot be empty");
        Users foundUsers = repo.findByEmail(email);
        if(foundUsers == null) throw new UsernameNotFoundException("Email not found");
        return foundUsers.getUser_id();
    }

    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        Users user = repo.findByEmail(email);
        System.out.println("from load user  " + user);

        if(user == null){
            System.out.println("User not found");
            throw new UsernameNotFoundException("User not found");
        }

        return User.builder()
            .username(user.getEmail())
            .password(user.getPassword())
            .build();
    }

}
