import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdddhospitalService {

  constructor(private http:HttpClient) { }


  /**
   * register
data  
 */
  public register(data) 
  {
      return this.http.post("http://localhost:5000/addHospital",data);
  }
}
