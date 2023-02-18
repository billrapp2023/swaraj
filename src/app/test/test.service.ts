import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  public registerNew(data){
    return this.http.post("http://localhost:5000/addHospital",data);
  }
}
