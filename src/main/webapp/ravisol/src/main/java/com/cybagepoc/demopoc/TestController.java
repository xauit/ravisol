package com.cybagepoc.demopoc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping(path="/api")
public class TestController {
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping(path = "/saveToDos")
	public void addToDos(@RequestBody String input) {
		ToDoList t = new ToDoList();
		t.setListValue(input);
		userRepository.save(t);
	}
	
	@GetMapping(path="/getAll")
	public @ResponseBody Iterable<ToDoList> getAllUsers() {
		// This returns a JSON or XML with the users
		return userRepository.findAll();
	}
	
	@PostMapping(path = "/deleteToDos")
	public void removeToDos(@RequestBody Integer input) {
		userRepository.deleteById(input);
	}
	
	@PostMapping(path = "/updateToDos")
	public void updateToDos(@RequestBody ToDoList list) {
		ToDoList t = new ToDoList();
		userRepository.save(list);
	}
	
}
