import { Component, OnInit } from '@angular/core';
import { Aboutus } from '../model/aboutus';
import { AboutusService } from '../aboutus/aboutus.service';
import { UpdateaboutService } from './updateabout.service';

@Component({
  selector: 'app-updateabout',
  templateUrl: './updateabout.component.html',
  styleUrls: ['./updateabout.component.css']
})
export class UpdateaboutComponent implements OnInit {
  public aboutus:Aboutus;
  constructor(private ser:UpdateaboutService) {this.aboutus=new Aboutus}

  ngOnInit() {
  }
  Submit()
  {
  console.log("about-->"+this.aboutus.about);
  this.ser.about(this.aboutus).subscribe(data=>{
    console.log(data);
  })
  console.log(this.aboutus);
}
handleFileSelect(evt){
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
        this.aboutus.image=btoa(binaryString);
        console.log(this.aboutus)
}
}
  