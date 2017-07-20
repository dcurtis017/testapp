import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { TodoItem } from '../services/todo-service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoItems;

  @Output()  onRemoveItem = new EventEmitter<TodoItem>();
  @Output()  onEditItem = new EventEmitter<TodoItem>();
  @Output()  onUpdateStatus = new EventEmitter<TodoItem>();
  constructor() { }

  ngOnInit() {
   
  }


  updateStatus(todoItem)
  {
    this.onUpdateStatus.emit(todoItem);
  }

  editItem(todoItem)
  {
    this.onEditItem.emit(todoItem);
  }

  removeItem(todoItem)
  {
    this.onRemoveItem.emit(todoItem);
  }

}
