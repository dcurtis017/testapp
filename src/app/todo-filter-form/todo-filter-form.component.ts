import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-filter-form',
  templateUrl: './todo-filter-form.component.html',
  styleUrls: ['./todo-filter-form.component.css']
})
export class TodoFilterFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/***\    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(term => {
          this.searches.push(term);
        }); */
