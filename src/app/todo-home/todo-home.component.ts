import { Component, OnInit } from '@angular/core';

import { TodoService, TodoItem } from '../services/todo-service';

@Component({
  selector: 'todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  todos = []
  currentTodo:TodoItem;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getItems();
    this.createEmptyTodoItem();
  }

  createEmptyTodoItem()
  {
    this.currentTodo = new TodoItem(0, '', new Date().toLocaleString().split(',')[0],false);
  }

  saveItem(todo)
  {
    this.todoService.saveItem(new TodoItem(this.currentTodo.id, todo['todoItem'], todo['todoDate'], this.currentTodo.isComplete));
    this.createEmptyTodoItem();
  }

   updateStatus(todoItem)
  {
    todoItem.isComplete = !todoItem.isComplete;
    this.todoService.updateItem(todoItem);
  }

  editItem(todoItem)
  {
    this.currentTodo = todoItem;
  }

  removeItem(todoItem)
  {
    this.todoService.removeItem(todoItem);
  }

}
