import { Component, OnInit } from '@angular/core';
import { Adddonor } from '../model/adddonor';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AdddonorService } from './adddonor.service';
import { Donations } from '../model/addDon';
import { ThemeService } from 'ng2-charts';


@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrls: ['./adddonor.component.css']
})
export class AdddonorComponent implements OnInit {
public adddonor:Adddonor;
public don:Donations;


  constructor(public toastr:ToastrManager,private ser:AdddonorService) {
    
    this.adddonor=new Adddonor()
    this.don=new Donations()
    this.ser.getmax().subscribe(data=>{
      let dt:any=data;
      this.don.did=dt.max;
    })
    this.don.rid=sessionStorage.getItem("uId")
  
  }

  ngOnInit() {
    
  }
 
Submit()
{
  if(this.adddonor.DonorName!=""&&this.adddonor.DonorGender!=""&&this.adddonor.DonorDOB!=""&&this.adddonor.DonorPhNum!=""&&this.adddonor.DonorTime!=""&&this.adddonor.Occupation!=""&&this.adddonor.DonorBG!=""&&this.adddonor.DonorAddrs!=""&&this.adddonor.DonorCity!=""&&this.adddonor.Pinno!=""&&this.adddonor.State!=""&&this.adddonor.Diseasecheck!=""&&this.adddonor.Allergycheck!=""&&this.adddonor.Otherallergies!=""&&this.adddonor.Std!=""&&this.adddonor.Bleeding!=""&&this.adddonor.Medication!=""&&this.adddonor.LastDondate!=""&&this.adddonor.NxtDondate!=""&&this.adddonor.DonorTime!=""&&this.adddonor.blood!=""||this.adddonor.cornea!=""||this.adddonor.Kidneys!=""||this.adddonor.Heart!=""||this.adddonor.Lungs!=""||this.adddonor.Liver!=""||this.adddonor.pancreas!=""||this.adddonor.smallintestine!=""||this.adddonor.larynx)
 {
  console.log("Name --->"+this.adddonor.DonorName);
  console.log("Gender --->"+this.adddonor.DonorGender);
  console.log("DOB --->"+this.adddonor.DonorDOB);
  console.log("Address --->"+this.adddonor.DonorAddrs);
  console.log("Time --->"+this.adddonor.DonorTime);
  console.log("Time --->"+this.adddonor.DonorBG);
  console.log("Locality --->"+this.adddonor.DonorLocality);
  console.log("City --->"+this.adddonor.DonorCity);
  
  

  
    this.ser.donoradd(this.adddonor).subscribe(data=>{
      console.log(data);
      this.toastr.successToastr("submitted Successfully");
      window.location.reload();
    })
    
    console.log(this.adddonor);

  
  
  this.adddonor.uId=sessionStorage.getItem("uId");
  console.log(this.adddonor)
 } 
 else
 {
  this.toastr.errorToastr("FIll All the fields!");
  console.log(this.adddonor);
 }
}

// public get()
// {
//   this.ser.gets().subscribe(data=>{
//     console.log(data);

//     let dt:any=[];

//     let d:any=data

//     for (let index = 0; index < d.length; index++) {
//       const element = d[index].HospOwn;
//       dt[index]=element;
      
//     }
//   }


checkValue1(event: any,value){
  console.log(event);
  if(event=='A')
  {
    console.log(value)
    this.don.donate=value
    this.ser.addDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
  else if(event=='B')
  {
    this.don.donate=value
    // console.log(value)
    this.ser.deleteDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
}
checkValue2(event: any,value){
  console.log(event);
  if(event=='A')
  {
    console.log(value)
    this.don.donate=value
    this.ser.addDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
  else if(event=='B')
  {
    this.don.donate=value
    // console.log(value)
    this.ser.deleteDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
}
checkValue3(event: any,value){
  console.log(event);
  if(event=='A')
  {
    console.log(value)
    this.don.donate=value
    this.ser.addDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
  else if(event=='B')
  {
    this.don.donate=value
    // console.log(value)
    this.ser.deleteDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
}
checkValue4(event: any,value){
  console.log(event);
  if(event=='A')
  {
    console.log(value)
    this.don.donate=value
    this.ser.addDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
  else if(event=='B')
  {
    this.don.donate=value
    // console.log(value)
    this.ser.deleteDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
}
checkValue5(event: any,value){
  console.log(event);
  if(event=='A')
  {
    console.log(value)
    this.don.donate=value
    this.ser.addDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
  else if(event=='B')
  {
    this.don.donate=value
    // console.log(value)
    this.ser.deleteDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
}
checkValue6(event: any,value){
  console.log(event);
  if(event=='A')
  {
    console.log(value)
    this.don.donate=value
    this.ser.addDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
  else if(event=='B')
  {
    this.don.donate=value
    // console.log(value)
    this.ser.deleteDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
}
checkValue7(event: any,value){
  console.log(event);
  if(event=='A')
  {
    console.log(value)
    this.don.donate=value
    this.ser.addDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
  else if(event=='B')
  {
    this.don.donate=value
    // console.log(value)
    this.ser.deleteDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
}
checkValue8(event: any,value){
  console.log(event);
  if(event=='A')
  {
    console.log(value)
    this.don.donate=value
    this.ser.addDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
  else if(event=='B')
  {
    this.don.donate=value
    // console.log(value)
    this.ser.deleteDonation(this.don).subscribe(data=>{
      console.log(data)
    })
  }
}
}

