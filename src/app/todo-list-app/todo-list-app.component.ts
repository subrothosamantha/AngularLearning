import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-app',
  templateUrl: './todo-list-app.component.html',
  styleUrls: ['./todo-list-app.component.css']
})
export class TodoListAppComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

  
   //: {title:string,description:string}
   todos =[{title:"laptop",description:"very useful device"}];
   
  addtodo(value:any){
    console.log();
    
     this.todos.push({title:value.title,description:value.description});
  }

}
