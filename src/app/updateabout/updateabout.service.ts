import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdateaboutService {

  constructor(private http:HttpClient) { }
  public about(data)
  {
    return this.http.post("http://localhost:5000/updateAbout",data);
  }
}
