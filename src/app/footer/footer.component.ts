import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../service/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  users: any;
  products : any;
  constructor(private userDataFromService:UserdataService) {
      this.users = userDataFromService.users(); 
      userDataFromService.products().subscribe(data=>{
         this.products =  data;
      });     
   }


  ngOnInit(): void {
  }

}
