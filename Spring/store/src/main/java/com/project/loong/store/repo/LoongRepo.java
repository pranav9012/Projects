package com.project.loong.store.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.loong.store.model.Loong_items;

@Repository
public interface LoongRepo extends JpaRepository<Loong_items, Integer> {

    @Query(value = "SELECT * FROM loong_items WHERE store = :store AND title = :title", nativeQuery = true)
    public List<Loong_items> getByTitleAndStore(@Param("title") String title, @Param("store") String store);

}
