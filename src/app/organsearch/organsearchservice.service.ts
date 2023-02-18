import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrgansearchserviceService {

  constructor(private http:HttpClient) { }
  public getData(data)
  {
    return this.http.post("http://localhost:5000/organsearching",data)
  }
}
