import { Component, OnInit } from '@angular/core';
import { ViewhospitalService } from './viewhospital.service';
import { Addhosp } from '../model/addhospital';

@Component({
  selector: 'app-viewhospital',
  templateUrl: './viewhospital.component.html',
  styleUrls: ['./viewhospital.component.css']
})
export class ViewhospitalComponent implements OnInit {
  public viewhosp;
  public updatehosp:Addhosp;
  constructor(private viewhos:ViewhospitalService) {
    this.updatehosp=new Addhosp();
    this.loadData() }


  ngOnInit() {
    this.loadData();
  }

  public data:any;
  loadData()
  {
    this.viewhos.getData().subscribe((data:any)=>{
      this.data=data;
      console.log(this.data)
  })
}
public tempDate:any;
update(event)
{
  
  console.log("-------------------------------------");
  this.tempDate=this.viewhosp[event.target.id];
  console.log(this.tempDate);
  this.updatehosp.no=this.tempDate.no;
  this.updatehosp.HospName=this.tempDate.Hname;
  this.updatehosp.HospAddrs=this.tempDate.Hadrs;
  this.updatehosp.HospOwn=this.tempDate.Ownership;
  this.updatehosp.HospHead=this.tempDate.HHead;
  this.updatehosp.HeadId=this.tempDate.HHid;
  this.updatehosp.Heademail=this.tempDate.Heademail;
  this.updatehosp.HospCat=this.tempDate.Hcat;
  this.updatehosp.HospLicNum=this.tempDate.Hlic;
  this.updatehosp.YOE=this.tempDate.YOE;
  this.updatehosp.HospPhNum=this.tempDate.Hphn;
  this.updatehosp.HospEmailid=this.tempDate.Hemail;
  
  console.log(this.updatehosp.HospName);
  console.log(this.updatehosp.HospAddrs);
  console.log(this.updatehosp.HospOwn);
  console.log(this.updatehosp.HospHead);
  console.log(this.updatehosp.HeadId);
  console.log(this.updatehosp.Heademail);
  console.log(this.updatehosp.HospCat);
  console.log(this.updatehosp.HospLicNum);
  console.log(this.updatehosp.YOE);
  console.log(this.updatehosp.HospPhNum);
  console.log(this.updatehosp.HospEmailid);
  console.log(this.updatehosp.About);
  // console.log(this.viewhosp[event.target.id])
}


upd(){

  console.log(this.updatehosp);
}
}