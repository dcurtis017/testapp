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

  //add some kind of error checking
  saveItem(todoItem)
  {
    if(todoItem.id == 0)
    {
      let max = (this.items.length == 0) ? 0 : Math.max.apply(Math,this.items.map(function(o){return o.id;}));
      todoItem.id = max+1;
      this.items.push(todoItem);
    }
    else
    {
      this.updateItem(todoItem);
    }
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
    let index = this.items.findIndex((tdi) => tdi.id == todoItem.id);
    this.items.splice(index, 1, todoItem);
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
