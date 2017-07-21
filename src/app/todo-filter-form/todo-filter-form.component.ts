import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//import { ReactiveFormsModule, FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'todo-filter-form',
  templateUrl: './todo-filter-form.component.html',
  styleUrls: ['./todo-filter-form.component.css']
})
export class TodoFilterFormComponent implements OnInit {
  @Output() onChangeCompleteOnlyFilter = new EventEmitter<boolean>();
  @Output() onChangeFilterTerm = new EventEmitter<string>();
  /*searchField: FormControl;
  searchString: string;*/

  constructor() { }

  ngOnInit() {
    this.onChangeFilterTerm.emit('');
    /*this.searchString = '';
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(term => {
          console.log(term);
          this.searchString = term;
        }); */
  }

  changeOnlyComplete(onlyComplete)
  {
    this.onChangeCompleteOnlyFilter.emit(onlyComplete);
  }

  searchField(searchTerm)
  {
    this.onChangeFilterTerm.emit(searchTerm);
  }

}


