import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recep } from '../model/recep';
@Injectable({
  providedIn: 'root'
})
export class DonatnserviceService {

  constructor(private http:HttpClient) { }
  public getData()
  {
    return this.http.get("http://localhost:5000/viewrecepient");
  }

  public getNames()
  {
    return this.http.get("http://localhost:5000/getDonor")
  }

  public getByID(id)
  {
    return this.http.get("http://localhost:5000/getDonorById/"+id)
  }

  getDonorList()
  {
    return this.http.get("http://localhost:5000/Donorget")
  }
  getRecepientList()
  {
    return this.http.get("http://localhost:5000/Recepientget")
  }
  getDonateList()
  {
    return this.http.get("http://localhost:5000/donate")
  }
  public getDonationlist(data)
  {
    return this.http.post("http://localhost:5000/donationlist",data)
  }
  getRecDetails(id)
  {
    return this.http.get<Recep>("http://localhost:5000/getRecepById/"+id)
  }

  save(data)
  {
    return this.http.post("http://localhost:5000/saveDaylyRecord",data);
  }
}
