import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private http:HttpClient) { }
  public notification(data)
  {
    return this.http.post("http://localhost:5000/notification",data)
  }
}
