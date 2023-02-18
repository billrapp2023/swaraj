import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadService {

  constructor(private http:HttpClient) { }
  public getData()
  {
    return this.http.get("http://localhost:5000/viewnotification")
}
public gets()
  {
    return this.http.get("http://localhost:5000/getAprovedHospitals")
  }
  public getblood()
{
    return this.http.get("http://localhost:5000/getAlert")
}

public getSearchResults(id)
{
  console.log("calllibng alooo")
  return this.http.get("http://localhost:5000/alertsearch/"+id)
}
public getProfileview(id)
{
  console.log("called------------------")
  return this.http.get("http://localhost:5000/profileview/"+id)
}
public loadJson()
  {
    console.log("loadJson");
    return this.http.get('http://localhost:5000/getHosp');
  }
}
