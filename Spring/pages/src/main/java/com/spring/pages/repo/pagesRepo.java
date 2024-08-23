package com.spring.pages.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.pages.model.Pages;

import jakarta.transaction.Transactional;

@Repository
public interface pagesRepo extends JpaRepository<Pages, Integer>{

    @Query(value = "SELECT * FROM pages WHERE user_id = :userId ORDER BY created_at DESC", nativeQuery = true)
    List<Pages> findAllByUserId(@Param("userId") int userId);

    @Transactional
    @Modifying
    @Query(value = "WITH to_delete AS (SELECT page_id FROM pages WHERE user_id = :userId ORDER BY created_at DESC OFFSET :pageId - 1 LIMIT 1) DELETE FROM pages WHERE page_id IN (SELECT page_id FROM to_delete)", nativeQuery = true)
    void deleteAllByUserId(@Param("userId") int user_id, @Param("pageId")int page_id);

    @Transactional
    @Modifying
    @Query(value = "WITH to_update AS (SELECT * FROM pages WHERE user_id = :userId ORDER BY created_at DESC OFFSET :pageId - 1 LIMIT 1) UPDATE pages SET title = :title WHERE page_id IN (SELECT page_id FROM to_update)", nativeQuery = true)
    void updateTitleByUserId(@Param("userId") int user_id, @Param("pageId") int page_id, @Param("title") String title);

    @Transactional
    @Modifying
    @Query(value = "WITH to_update AS (SELECT * FROM pages WHERE user_id = :userId ORDER BY created_at DESC OFFSET :pageId - 1 LIMIT 1) UPDATE pages SET content = :content WHERE page_id IN (SELECT page_id FROM to_update)", nativeQuery = true)
    void updateContentByUserId(@Param("userId") int user_id, @Param("pageId") int page_id, @Param("content") String content);

}
