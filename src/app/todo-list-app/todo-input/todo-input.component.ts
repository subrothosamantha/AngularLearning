import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})


export class TodoInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'abc';
  description = '';
  
  todoV = new todoValues(this.title,this.description);

  @Output() todo = new EventEmitter();

  addtodo(){
    console.log(this.todoV);   
     this.todo.emit(this.todoV);
  }
}

class todoValues{
  title:string;
  description : string;

  constructor(title:string,description:string){
    this.title = title;
    this.description = description;
  }
}