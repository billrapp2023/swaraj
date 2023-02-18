import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BloodstatusService {

  constructor(private http:HttpClient) { }

  public getData(id){
    return this.http.get("http://localhost:5000/getBloodStatus/"+id);
  }

  public gets()
  {
    return this.http.get("http://localhost:5000/getAprovedHospitals")
  }

  public getHospName()
  {
    return this.http.get("http://localhost:5000/getAprovedHospitals")
  }


}
