import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoItems;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoItems = this.todoService.getItems();
  }


  updateStatus(todoItem)
  {
    console.log(`Marking ${JSON.stringify(todoItem)} as complete`);
    todoItem.isComplete = !todoItem.isComplete;
    this.todoService.updateItem(todoItem);
  }

  editItem(todoItem)
  {
    //just for shits and giggles change this to emit the even to the parent container which will handle the delete
  }

  removeItem(todoItem)
  {
    this.todoService.removeItem(todoItem);
  }

}
