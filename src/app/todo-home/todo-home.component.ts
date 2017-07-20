import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo-service';

@Component({
  selector: 'todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.css']
})
export class TodoHomeComponent implements OnInit {

  todos = []
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todos = this.todoService.getItems();
  }

  addItem(todo)
  {
    console.log(`Creating ${JSON.stringify(todo)}`)
    this.todoService.addItem(todo['todoItem'], todo['todoDate']);
  }

   updateStatus(todoItem)
  {
    todoItem.isComplete = !todoItem.isComplete;
    this.todoService.updateItem(todoItem);
  }

  editItem(todoItem)
  {
    console.log('editing');
  }

  removeItem(todoItem)
  {
    this.todoService.removeItem(todoItem);
  }

}
