package com.boot.spring_mvc;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.boot.spring_mvc.model.Engineer;
import com.boot.spring_mvc.repo.EngineerRepo;

@Controller
public class HomeController {
 
	@Autowired
	EngineerRepo repo;
	@RequestMapping("/")
	public String home() {
//		System.out.println("Homepage requested");
		return "index";
	}
	
	@RequestMapping("add")
	public ModelAndView add(@RequestParam("num1")int i, @RequestParam("num2")int j) {
		
		ModelAndView mv = new ModelAndView();
		mv.setViewName("add");
		
		int k = i + j;
		
		mv.addObject("num3", k);
		return mv;
	}
	
//	@Autowired
//	Engineer engineer;
	
	@PostMapping("addEngineer")
	public String addEngineer(@ModelAttribute("engineer") Engineer uengineer) {
		
//		engineer.setId(uengineer.getId());
//		engineer.setName(uengineer.getName());
//		engineer.setDesignation(uengineer.getDesignation());
		repo.save(uengineer);
		return "addEngineer";
	}
	
	@GetMapping("getEngineers")
	public String getEngineers(ModelMap m) {
		
		// List<Engineer> engineers = Arrays.asList(new Engineer(1, "Pranav", "Developer"),
		// 										new Engineer(2, "Sonika", "Hardware Engineer"),
		// 										new Engineer(3, "Agir", "Project Manager"),
		// 										new Engineer(4, "Taihou", "Senior Developer"));
		m.addAttribute("engineers", repo.findAll());
		return "showEngineers";
	}

	@GetMapping("{id}")
	public String getEngineerById(@PathVariable Integer id, ModelMap m) {
		
		Engineer engineer = repo.getReferenceById(id);
		m.addAttribute("engineer", engineer);
		return "engineer";
	}

	@GetMapping("engineer/{name}")
	public String getEngineerByName(@PathVariable String name, ModelMap m) {
		
		List<Engineer> engineer = repo.findByNameIgnoreCase(name);
		m.addAttribute("engineer", engineer);
		return "engineer";
	}
	
}
