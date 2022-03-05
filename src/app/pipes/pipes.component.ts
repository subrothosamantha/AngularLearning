import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data : string;

  date = new Date();

  person={
    name : "subrotho samantha",
    membership : function(){
      if(3>2)
        return "premium";
        else
           return "basic";
    },
  
    secondperson:"value"
  }
  second_person = this.person;

  first_user = new User("subrotho samanthal",23);
  
}

class User{
  name: string;
  age : number;
  constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }
   membership() : string {
      if(this.age > 30 && this.age < 50 )
      return "premium";
      else if(this.age > 50){
        return "golden";
      }
      return "basic"
  }
 
}