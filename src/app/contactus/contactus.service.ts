import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }
  public complaints(data) 
  {
      return this.http.post("http://localhost:5000/complaint",data);
  }
}
