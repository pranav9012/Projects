package com.learn.SpringJDBC.repo;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.learn.SpringJDBC.model.Engineer;

@Repository
public class EngineerRepo {
	
	private JdbcTemplate template;
	
	public void save(Engineer engineer) {
		String str = "INSERT INTO engineer (name, designation) VALUES (?, ?)";
		int rows_affected = template.update(str, engineer.getName(), engineer.getDesignation());
		System.out.println(rows_affected + " : Row/s Affected");
	}
	
	public List<Engineer> findAll(){
		
		String sql = "SELECT * FROM engineer";
		RowMapper<Engineer> mapper = (rs, rowNum) -> {
				Engineer engineer = new Engineer();
				engineer.setId(rs.getInt("id"));
				engineer.setName(rs.getString("name"));
				engineer.setDesignation(rs.getString("designation"));
				
				return engineer;
		};
		
		List<Engineer> engineers = template.query(sql, mapper);
		return engineers;
	}

	public JdbcTemplate getTemplate() {
		return template;
	}
	
	@Autowired
	public void setTemplate(JdbcTemplate template) {
		this.template = template;
	}
}
