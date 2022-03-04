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

  
  
 

  @Output() todo = new EventEmitter();

  addtodo(title:any,description:any){
   let todoV = new todoValues(title,description);
     this.todo.emit(todoV);
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