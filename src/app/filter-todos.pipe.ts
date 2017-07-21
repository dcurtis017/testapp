import { Pipe, PipeTransform } from '@angular/core';

import {TodoItem} from './services/todo-service';
@Pipe({
  name: 'filterTodos',
  pure: false
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: TodoItem[], onlyComplete:boolean, filterTerm:string): any {
    if(!onlyComplete)
      {
        return todos.filter((ti) => ti.todoText.toLowerCase().includes(filterTerm.toLowerCase()));
      }
    return todos.filter((ti) => ti.isComplete && ti.todoText.toLowerCase().includes(filterTerm.toLowerCase()));
  }
}
