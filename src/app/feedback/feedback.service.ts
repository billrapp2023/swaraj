import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) { }
  public feedbacks(data) 
  {
      return this.http.post("http://localhost:5000/feedback",data);
  }
}
