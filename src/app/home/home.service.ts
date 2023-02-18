import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }
  public getProfileview(data)
{
  console.log("called------------------")
  return this.http.get("http://localhost:5000/profileview/"+data)
}
}
