package com.learn.SpringJDBC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.learn.SpringJDBC.model.Engineer;
import com.learn.SpringJDBC.repo.EngineerRepo;

@SpringBootApplication
public class SpringJdbcApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(SpringJdbcApplication.class, args);
		
		Engineer engineer = context.getBean(Engineer.class);
		engineer.setId(1);
		engineer.setName("Taihou");
		engineer.setDesignation("Senior Software Developer");
		
		EngineerRepo repo = context.getBean(EngineerRepo.class);
		repo.save(engineer);
		System.out.println(repo.findAll());
	}

}
