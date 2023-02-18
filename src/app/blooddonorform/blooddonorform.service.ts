import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlooddonorformService {

  constructor(private http:HttpClient) { }
  public recepient(data)
  {
    return this.http.post("http://localhost:5000/Addrecepient",data);
  }
}
