import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  permissionFromParent = true;

  parentDecision : boolean;

  islaptop = true;

  course = [{id:1,name:"computer science"},{id:2,name:"physical studies"},{id:3,name:"Astronomy"}]

  constructor() { }

  ngOnInit(): void {
  }

  actualGreet(value:string){
    alert(value);
  }


  get parentAllowed() : boolean{
    this.parentDecision = true;
    return this.parentDecision;
  }
  get parentNotAllowed() : boolean{
    this.parentDecision = false;
    return this.parentDecision;
  }
  get toggleDecision(): boolean{
    this.parentDecision = !this.parentDecision;
    return this.parentDecision;
  }
}
