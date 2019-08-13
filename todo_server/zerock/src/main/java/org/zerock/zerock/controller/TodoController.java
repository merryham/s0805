package org.zerock.zerock.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.zerock.zerock.domain.Todo;

@RestController
@RequestMapping("/todo")
public class TodoController{

    @PostMapping("/new")
    public String addTodo(@RequestBody Todo todo ){
        System.out.println("add To do......."+ todo);
        return "success";
    }
}