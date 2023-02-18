import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodstatusformService {

  constructor(private http:HttpClient) { }
  public bloodstatus(data)
  {
    return this.http.post("http://localhost:5000/bloodstatus",data)
  }
}
