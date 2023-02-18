import { Component, OnInit } from '@angular/core';
import { DonoreditService } from './donoredit.service';
import { Adddonor } from '../model/adddonor';

@Component({
  selector: 'app-donoredit',
  templateUrl: './donoredit.component.html',
  styleUrls: ['./donoredit.component.css']
})
export class DonoreditComponent implements OnInit {
public data;
public adddonor:Adddonor;
  constructor(private donoredit:DonoreditService) { this.loadData()
    this.adddonor=new Adddonor()}

  ngOnInit() {
    
  }
  loadData()
  {
    this.donoredit.getData().subscribe((data:any)=>{
      this.data=data;
      console.log(this.data)
    })
}
public tempDate:any;
update(event)
{
  
  this.tempDate=this.data[event.target.id];
  this.adddonor.did=this.tempDate.did;
  this.adddonor.DonorName=this.tempDate.Name;
  this.adddonor.DonorAddrs=this.tempDate.Address;
  this.adddonor.DonorDOB=this.tempDate.DOB;
  this.adddonor.DonorBG=this.tempDate.DonorBG;
  this.adddonor.DonorGender=this.tempDate.Gender;
  this.adddonor.DonorPhNum=this.tempDate.DonorPhNum;
  this.adddonor.DonorCity=this.tempDate.City;
  this.adddonor.Pinno=this.tempDate.Pincode;
  this.adddonor.State=this.tempDate.State;
  this.adddonor.Occupation=this.tempDate.Occupation;
  this.adddonor.Diseasecheck=this.tempDate.DiseaseCheck;
  this.adddonor.Allergycheck=this.tempDate.AllergyCheck;
  this.adddonor.Otherallergies=this.tempDate.OtherAllergies;
  this.adddonor.Std=this.tempDate.Std;
  this.adddonor.Bleeding=this.tempDate.Bleeding;
  this.adddonor.Medication=this.tempDate.Medication;
  this.adddonor.LastDondate=this.tempDate.LastDonatingdate;
  this.adddonor.NxtDondate=this.tempDate.NextDonatingDate;
  this.adddonor.DonorTime=this.tempDate.HowOftenDonateBlood;

  console.log(this.adddonor);
  console.log(this.data[event.target.id])
}


upd(){

  console.log(this.adddonor);
}
}
