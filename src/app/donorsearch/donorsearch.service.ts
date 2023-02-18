import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThemeService } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class DonorsearchService {

  constructor(private http:HttpClient) { }
   
public getData()
{
    return this.http.get("http://localhost:5000/getDonor")
}

public getSearchResult(data)
{
  return this.http.get("http://localhost:5000/DonorSearch/"+data)
}

}
