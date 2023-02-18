import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdddonorService {

  constructor(private http:HttpClient) { }
  public donoradd(data)
  {
    return this.http.post("http://localhost:5000/adddonor",data)
  }

  public getmax()
  {
    return this.http.get("http://localhost:5000/getDonorMax")
  }

  public addDonation(data)
  {
    return this.http.post("http://localhost:5000/addDonations",data)
  }

  public deleteDonation(data)
  {
    return this.http.post("http://localhost:5000/deleteDonations",data)
  }
  
}
