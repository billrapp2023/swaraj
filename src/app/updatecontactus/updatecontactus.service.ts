import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdatecontactusService {

  constructor(private http:HttpClient) { }
  public contact(data)
  {
    return this.http.post("http://localhost:5000/updatecontact",data);
  }
}
