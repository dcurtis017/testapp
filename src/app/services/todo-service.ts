import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {

  items = [];
  constructor() 
  {
    this.items.push(new TodoItem(1, 'Go to store', '05/22/2017', false));
    this.items.push(new TodoItem(2, 'Buy bagels', '05/22/2017', true));
    this.items.push(new TodoItem(3, 'Write to penpal', '05/22/2017', true));
  }

  addItem(txt, dueDate)
  {
    let max = (this.items.length == 0) ? 0 : Math.max.apply(Math,this.items.map(function(o){return o.id;}));
    this.items.push(new TodoItem(max+1, txt, dueDate, false));
  }

  getItems()
  {
    return this.items;
  }

  removeItem(todoItem)
  {
    let index = this.items.findIndex((tdi) => tdi.id == todoItem.id);
    this.items.splice(index, 1);
  }

  updateItem(todoItem)
  {
    let found = this.items.find((tdi) => tdi.id == todoItem.id);
    found = todoItem;
  }
}

export class TodoItem
{
  id;
  todoText;
  todoDate;
  isComplete;
  constructor(id: number, todoText: string, todoDate: string, isComplete: boolean)
  {
    this.id = id;
    this.todoDate = todoDate;
    this.todoText = todoText;
    this.isComplete = isComplete;
  }
}
