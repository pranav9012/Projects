package com.project.loong.store.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.loong.store.exception.SQLErrorException;
import com.project.loong.store.model.Loong_items;
import com.project.loong.store.repo.LoongRepo;

@Service
public class LoongService {

    @Autowired
    private LoongRepo repo;
    public List<Loong_items> getProducts() throws SQLErrorException{
        List<Loong_items> items = repo.findAll();
        for(Loong_items li : items){
            li.toString();
        }
        if(items == null || items.isEmpty()) throw new SQLErrorException("No Products found");
        return items;
    }
    public List<Loong_items> getProductByTitleAndStore(String store, String title) throws SQLErrorException{
        List<Loong_items> items = repo.getByTitleAndStore(title, store);
        for(Loong_items li : items){
            li.toString();
        }
        if(items == null || items.isEmpty()) throw new SQLErrorException("No Product found with " + store + " and " + title);
        return items;
    }

}
