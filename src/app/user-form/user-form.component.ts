import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  users: any;
  constructor(private userDataFromService:UserdataService) {
      this.users = userDataFromService.users();      
   }

  userData : any={};

  ngOnInit(): void {
  }

  formSubmit(data:NgForm){
     this.userData = data;
  }
}
