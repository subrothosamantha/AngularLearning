import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Input() parentAllowedForParty : boolean;

  @Output() greetingFromParent = new EventEmitter();

  name : string;
  @Input() loggedIn : boolean;
  private _islaptopprovided : boolean;
  @Input() courseList : {id:number,name:string}[];

  get isLaptopProvided() : boolean{
    return this._islaptopprovided;
  }
  @Input()
  set isLaptopProvided(value : boolean){
        this.isLaptopProvided = value;
  }

  makeparentgreet(){
    this.greetingFromParent.emit(this.name);
  }

  greetme(){
    alert('hey');
  }

  
  
}
