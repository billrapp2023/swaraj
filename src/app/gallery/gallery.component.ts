import { Component, OnInit } from '@angular/core';
import { GalleryService } from './gallery.service';
import { Gallery } from '../model/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public gallery:Gallery
  constructor(private ser:GalleryService) { }

  ngOnInit() {this.loadData();
  }
  public data:any;
  loadData(){
    // this.gallery.gid=sessionStorage.getItem("gid")
    this.ser.getData().subscribe((data:any)=>{
      this.data=data;
      this.gallery.image=this.data[0].image;
      console.log(data);
      
    })
    
  }
}
