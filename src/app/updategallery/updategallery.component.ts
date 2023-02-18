import { Component, OnInit } from '@angular/core';
import { Gallery } from '../model/gallery';
import { UpdategalleryService } from './updategallery.service';

@Component({
  selector: 'app-updategallery',
  templateUrl: './updategallery.component.html',
  styleUrls: ['./updategallery.component.css']
})
export class UpdategalleryComponent implements OnInit {
  public gallery:Gallery;

  constructor(private ser:UpdategalleryService) {this.gallery=new Gallery}

  ngOnInit() {
  }
Submit()
{
  
  console.log("Image --->"+this.gallery.image);
 

  this.ser.update(this.gallery).subscribe(data=>{
    console.log(data);
  })

  console.log(this.gallery);
}
handleFileSelect1(evt){
  // sessionStorage.setItem("gid",evt.target.id)
  var files = evt.target.files;
  var file = files[0];

if (files && file) {
    var reader = new FileReader();
    reader.onload =this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
}
}

private base64textString:String="";

_handleReaderLoaded(readerEvt) {
 var binaryString = readerEvt.target.result;
        this.base64textString= btoa(binaryString);
        // console.log(btoa(binaryString));
        this.gallery.image=btoa(binaryString);
        console.log(this.gallery)
}


}
