import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  public getData(data){
    return this.http.get("http://localhost:5000/getuserprofile/"+data);
  }
  public send(data:any){
    return this.http.post("http://localhost:5000/userprofile",data);
  }
}
