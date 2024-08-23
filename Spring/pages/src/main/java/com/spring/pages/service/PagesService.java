package com.spring.pages.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.pages.exceptions.RemoteException;
import com.spring.pages.exceptions.SQLErrorException;
import com.spring.pages.model.Pages;
import com.spring.pages.repo.pagesRepo;

@Service
public class PagesService {

    @Autowired
    private pagesRepo repo;

    public int firstNote(int user_id) throws SQLErrorException{
        Pages firstPage = new Pages(user_id, "First Page", "This is the beginning of your Pages");
        try{
            repo.save(firstPage);
            return 1;
        } catch (Exception e){
            return -1;
        }

    }

    public List<Pages> getNotes(int user_id) throws SQLErrorException{
            List<Pages> pages = repo.findAllByUserId(user_id);
            for(Pages p : pages){
                p.toString();
            }
            if(pages == null || pages.isEmpty()) throw new SQLErrorException("No pages found for this user");
            return pages;
    }

    public void addNote(Pages pages, int user_id) throws RemoteException, SQLErrorException{
        pages.setUser_id(user_id);
        repo.save(pages);
    }

    public void deleteNote(int user_id, int page_id) throws SQLErrorException, RemoteException{
        repo.deleteAllByUserId(user_id, page_id);
    }

    public void updateTitle(int user_id, int page_id, String title) throws SQLErrorException, RemoteException{
        repo.updateTitleByUserId(user_id, page_id, title);
    }

    public void updateContent(int user_id, int page_id, String content) throws SQLErrorException, RemoteException{
        repo.updateContentByUserId(user_id, page_id, content);
    }
}
