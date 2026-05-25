package com.example.crud.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.crud.entity.Employee;
import com.example.crud.service.EmployeeService;

@RestController
@RequestMapping("/employees")
@CrossOrigin(origins = "http://localhost:3000")

public class EmployeeController {
	
	@Autowired
	private EmployeeService service;
	
	//CREATE
	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee) {
		return service.saveEmployee(employee);
	}
	
	//GET ALL
	@GetMapping
	public List<Employee> getAllEmployees(){
		return service.getAllEmployees();
	}
	
	//GET BY ID
	@GetMapping("/{id}")
	public Employee getEmployeeById(@PathVariable Long id) {
		return service.getEmployeeById(id);
	}
	
	
	//UPDATE
	@PutMapping("/{id}")
	public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
		return service.updateEmployee(id,employee);
	}
	
	//DELETE BY ID
	@DeleteMapping("/{id}")
	public String deleteEmployee(@PathVariable Long id) {
		return service.deleteEmployee(id);
	}
	
	//DELETE ALL(NEW)
	@DeleteMapping
	public String deleteAllEmployees() {
		return service.deleteAllEmployees();
	}
}
