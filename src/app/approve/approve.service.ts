import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApproveService {

  constructor(private http:HttpClient) { }
  public getData()
  {
    return this.http.get("http://localhost:5000/getHospitals")
  }

  public aprove(data)
  {
    return this.http.get("http://localhost:5000/aprove/"+data);
  }

  public reject(data)
  {
    return this.http.get("http://localhost:5000/reject/"+data);
  }
}
