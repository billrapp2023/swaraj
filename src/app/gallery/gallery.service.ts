import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }
  public getData()
  {
    return this.http.get("http://localhost:5000/gallery")
    
  }
}
