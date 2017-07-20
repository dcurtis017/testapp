import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { FormGroup,  FormControl, Validators, FormBuilder } from '@angular/forms';


import { TodoItem } from '../services/todo-service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit, OnChanges {

  todoForm: FormGroup;
  @Input() todoItem: TodoItem = null;
  //could use a getter/setter instead of ngonchange https://angular.io/guide/component-interaction#!#parent-to-child-setter
  showForm = true;
  buttonText = {cancel: 'Cancel', remove: 'Remove'};
  editing = false;
  
  @Output() onFormSubmit = new EventEmitter();
  @Output() onFormReset = new EventEmitter();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    //console.log(JSON.stringify(changes))
    this.reset();
  }

  onSubmit()
  {
    if (this.todoForm.valid) {
      this.onFormSubmit.emit(this.todoForm.value);
      this.reset();
    }
  }

  resetForm()
  {
    this.onFormReset.emit();
  }

  reset()
  {
    this.showForm = false;
    setTimeout(() => {//set timeout helps to pause execution so the browser's rendering can catch up
      this.createForm();
      this.showForm = true;
      this.editing = false;
    });
  }

  createForm()
  {
    this.todoForm = this.formBuilder.group({
      /*todoItem: new FormControl('', Validators.required),
      todoDate: new FormControl(new Date().toLocaleString().split(',')[0], Validators.required),*/
      todoItem: [this.todoItem.todoText, [Validators.required, Validators.minLength(2)]],
      todoDate: [this.todoItem.todoDate, [Validators.required, this.hasValidDateFormat]]
    });
  }

  /*hasValidDateFormat(dateFormat: string) 
  {
    return function(input: FormControl)
    {
      
    }
  }*/

  hasValidDateFormat(input: FormControl) : any
  {
    let value = input.value;
    if(/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.exec(value) == null)
    {
      return { invalidDateFormat: true }
    }
    let parts = value.split('/');
    let day = +parts[0], month = +parts[1], year = +parts[2];
    if(parts[0] < 1 || parts[0] > 12)
    {
      return {invalidMonth: true};  
    }
    if(parts[1] < 1 || parts[1] > 31)
    {
      return {invalidDay: true};  
    }
    if(parts[2] < 1920 || parts[2] > 2100)
    {
      return {invalidYear: true};
    }
    return null;
  }
}
