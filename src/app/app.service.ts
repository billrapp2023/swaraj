import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './model/form1';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  public forgotPassword(data){
    return this.http.post("http://localhost:5000/forgotPassword",data);
  }


  public login(data){
    return this.http.post(environment.baseURL+"login",data);
  }


}
