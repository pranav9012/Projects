package com.project.product_manager.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.product_manager.model.ProductService;

@Repository
public interface ProductRepository extends JpaRepository<ProductService, Integer>{

    ProductService findByName(String name);

    void deleteByName(String name);

}
