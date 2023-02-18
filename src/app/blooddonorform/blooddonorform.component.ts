import { Component, OnInit } from '@angular/core';
import { Donation } from '../model/donation';
import { Recepient } from '../model/recepient';
import { BlooddonorformService } from './blooddonorform.service';

@Component({
  selector: 'app-blooddonorform',
  templateUrl: './blooddonorform.component.html',
  styleUrls: ['./blooddonorform.component.css']
})
export class BlooddonorformComponent implements OnInit {
  public donatn:Recepient;
  constructor(private ser:BlooddonorformService) {
    this.donatn=new Recepient()
   }

  ngOnInit() {
  }
  Submit()
  {
    
    console.log("Fullname --->"+this.donatn.Rfname);
    console.log("DOB --->"+this.donatn.Rdob);
    console.log("GENDER --->"+this.donatn.Rgender);
    console.log("ADDRESS --->"+this.donatn.Raddress);
    console.log("descrpto --->"+this.donatn.Rdescriptn);
    console.log("Patientid --->"+this.donatn.Patientid);
    console.log("number --->"+this.donatn.ContactNum);
    console.log("drname --->"+this.donatn.DoctorName);
    this.ser.recepient(this.donatn).subscribe(data=>{
      console.log(data);
    })
    console.log(this.donatn);

    this.donatn.uId=sessionStorage.getItem("uId");
  }
}
