import { Component, OnInit } from '@angular/core';
import { Profile } from '../model/profile';
import { Router } from '@angular/router';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profile:Profile
  constructor(private route:Router,private profile1:ProfileService,private use:ProfileService) { 
    this.profile=new Profile
    this.profile.uId=sessionStorage.getItem("uId");
  }
  submit(){

   
    this.use.send(this.profile).subscribe(data=>{
      console.log("data sended...");
      })
    console.log(this.data)}
  ngOnInit() {this.loadData();
  }
  public data:any;
  loadData(){
    this.profile1.getData(sessionStorage.getItem("uId")).subscribe((data:any)=>{
      this.data=data;
      console.log(data)
      this.profile.HospName=this.data[0].HospName;
      this.profile.HospHead=this.data[0].HospHead;
      this.profile.HospAddrs=this.data[0].HospAddrs;
      this.profile.HospPhNum=this.data[0].HospPhNum;
      this.profile.Telephone=this.data[0].HospTel;
      this.profile.Heademail=this.data[0].Heademail;
      this.profile.About=this.data[0].About;
      this.profile.image=this.data[0].image;
     

      console.log(this.profile.HospName)
    })
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
          this.profile.image=btoa(binaryString);
          console.log(this.profile)
  }
}
