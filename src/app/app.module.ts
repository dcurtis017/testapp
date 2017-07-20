import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { TodoHomeComponent } from './todo-home/todo-home.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoFilterFormComponent } from './todo-filter-form/todo-filter-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';

import { TodoService } from './services/todo-service';

const routes: Routes = [
 {path: 'home', component: TodoHomeComponent},
 {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoHomeComponent,
    TodoFormComponent,
    TodoFilterFormComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
