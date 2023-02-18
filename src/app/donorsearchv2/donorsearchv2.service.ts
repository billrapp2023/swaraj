import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Donorsearchv2Service {

  constructor(private http:HttpClient) { }
  public getData()
{
  return this.http.get("./assets/adddonor.json")
}
}
