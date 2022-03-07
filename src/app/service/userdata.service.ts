import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url : any = 'https://fakestoreapi.com/products';
  constructor(private http:HttpClient) {}

  users(){
    return [
      {id : 1, name : "computer science"},
      {id : 2, name : "Physics"},
      {id : 3, name : "Social"},
    ];
  }

  products(){
    return this.http.get(this.url);
  }
}
