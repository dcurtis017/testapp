import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormControl, Validators, FormBuilder } from '@angular/forms';


import { TodoService } from '../services/todo-service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm: FormGroup;
  showForm = true;
  buttonText = {cancel: 'Cancel', remove: 'Remove'};
  editing = false;
  
  constructor(private formBuilder: FormBuilder, private todoService: TodoService) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit()
  {
    if (this.todoForm.valid) {
      console.log(this.todoForm.value);
      this.todoService.addItem(this.todoForm.value['todoItem'], this.todoForm.value['todoDate']);
      this.reset();
    }
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
      todoItem: ["", Validators.required],
      todoDate: [new Date().toLocaleString().split(',')[0], [Validators.required, Validators.minLength(2)]]
    });
    console.log('', this.todoForm.get("todoDate"))
  }
}
