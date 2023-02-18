import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddemployeeService {

  constructor(private http:HttpClient ) {}
  public register(data) 
  {
      return this.http.post("http://localhost:5000/addemployee",data);
  }
}
