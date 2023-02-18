import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UpdategalleryService {

  constructor(private http:HttpClient) { }
  public update(data)
  {
    return this.http.post("http://localhost:5000/updateGallery",data)
  }
}
