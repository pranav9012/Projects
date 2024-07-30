package com.project.product_manager;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.product_manager.model.ProductService;
import com.project.product_manager.repo.ProductRepository;



// Since there's no frontend as of now. Mutiple products of same name will be an issue.
// so we will have unique products.
// Once GUI is there, we can simply click on delete and the object will be passed
// in backend and it makes it easy to delete by id (unique key).

@RestController
public class ProductController {

    @Autowired
    private ProductRepository repo;
    //Get all Products
    @GetMapping(value = "/", produces = {"application/json", "application/xml"})
    public List<ProductService> getProducts() {
        
        // System.out.println(new ProductService().toString());
        return repo.findAll();
    }

    //Get Product/s by Name
    @GetMapping(value = "{name}", produces = {"application/json", "application/xml"})
    public ProductService getProductsByName(@PathVariable String name) {
        
        return repo.findByName(name);
    }

    //Add a product to inventory
    @PostMapping(value = "add", consumes = {"application/json", "application/xml"}, produces = {"application/json", "application/xml"})
    public List<ProductService> addProduct(@RequestBody ProductService product){
        
        repo.save(product);
        return repo.findAll();
    }

// Update a Product
    @PutMapping(value = "update/{name}", consumes = {"application/json", "application/xml"}, produces = {"application/json", "application/xml"})
    public ProductService updateProduct(@PathVariable String name, @RequestBody ProductService product) {
        
        ProductService dbProduct = repo.findByName(name);
        
        if(product.getName() != null) dbProduct.setName(product.getName());
        if(product.getType() != null) dbProduct.setType(product.getType());
        if(product.getPlace() != null) dbProduct.setPlace(product.getPlace());
        if(product.getWarranty() != 0) dbProduct.setWarranty(product.getWarranty());

        return repo.save(dbProduct);
}

    // Delete a Product
    @DeleteMapping(value = "delete/{name}", produces = {"application/json", "application/xml"})
    public List<ProductService> deleteProduct(@PathVariable String name){
        
        repo.delete(repo.findByName(name));
        return repo.findAll();
    }
    
    
}
