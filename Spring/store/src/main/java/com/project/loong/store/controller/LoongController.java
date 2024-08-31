package com.project.loong.store.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.project.loong.store.model.Loong_items;
import com.project.loong.store.service.LoongService;



@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class LoongController {
    
    @Autowired
    private LoongService service;
    @GetMapping("/all-products")
    public ResponseEntity<Map<String, List<Loong_items>>> fetchProducts() {
        Map<String, List<Loong_items>> res = new HashMap<>();
        try{
            List<Loong_items> items = service.getProducts();
            res.put("data", items);
            return ResponseEntity.status(HttpStatus.OK).body(res);
        } catch (Exception e){
            System.out.println(e);
            List<Loong_items> Eitems = new ArrayList<>();
            res.put("data", Eitems);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }

    @GetMapping("/{store}/{title}")
    public ResponseEntity<Map<String, Object>> getProductByTitleAndStore(@PathVariable String store, @PathVariable String title) {
        Map<String, Object> res = new HashMap<>();
        try {
            List<Loong_items> items = service.getProductByTitleAndStore(store, title);
            if (!items.isEmpty()) {
                res.put("data", items.get(0));
                return ResponseEntity.status(HttpStatus.OK).body(res);
            } else {
                res.put("error", "No items found");
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
            }
        } catch (Exception e) {
            res.put("error", "Internal Server Error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
        }
    }
    
    
}
