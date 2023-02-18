import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(private http:HttpClient) { }
  public reply(data)
  {
    return this.http.post("http://localhost:5000/reply",data)
  }
}
