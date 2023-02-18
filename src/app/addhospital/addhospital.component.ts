import { Component, OnInit } from '@angular/core';
import { Addhosp } from '../model/addhospital';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AdddhospitalService } from './adddhospital.service';

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.css']
})
export class AddhospitalComponent implements OnInit {
public addhospital:Addhosp;

  constructor(public toastr: ToastrManager,private ser:AdddhospitalService) {this.addhospital=new Addhosp }

  ngOnInit() {
  }
Submit()
{
  console.log("HName --->"+this.addhospital.HospName);
  console.log("Hadrs --->"+this.addhospital.HospAddrs);
  console.log("HOwn --->"+this.addhospital.HospOwn);
  console.log("HHead --->"+this.addhospital.HospHead);
  
  console.log("HeadEmailid --->"+this.addhospital.Heademail);
  console.log("Hospcat --->"+this.addhospital.HospCat);
  console.log("HospLic --->"+this.addhospital.HospLicNum);
  console.log("HYoe --->"+this.addhospital.YOE);
  console.log("Hphn --->"+this.addhospital.HospPhNum);

  console.log("HAbout --->"+this.addhospital.About);
  console.log("HLogo --->"+this.addhospital.image);
  
if(this.addhospital.HospName!=""&&this.addhospital.HospAddrs!=""&&this.addhospital.HospOwn!=""&&this.addhospital.HospHead!=""&&this.addhospital.Heademail!=""&&this.addhospital.HospCat!=""&&this.addhospital.HospLicNum!=""&&this.addhospital.YOE!=""&&this.addhospital.HospPhNum!=""&&this.addhospital.About!="")
 {
  this.ser.register(this.addhospital).subscribe(data=>{
    console.log(data);
    this.toastr.successToastr('Hospital added succesfully');
  })
  console.log(this.addhospital);
}
else{
  this.toastr.errorToastr("you must fill all fields")
}
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
        this.addhospital.image=btoa(binaryString);
        console.log(this.addhospital)
}

}
