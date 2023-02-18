import { Component, OnInit } from '@angular/core';
import { notification } from '../model/notification';
import { DatePipe } from '@angular/common';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  public notificatn:notification;
  public dt:any;
  constructor(private datePipe: DatePipe,private noti:AlertService) { 
    this.notificatn=new notification();
    this.notificatn.uId=sessionStorage.getItem("uId");
    this.dt=new Date()
    console.log(this.dt)
    this.dt = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    console.log(this.dt)
    this.notificatn.date=this.dt
  }

  ngOnInit() {
  }
 Submit()
 {
  console.log("notification -->"+this.notificatn.notification);
  console.log("date-->"+this.notificatn.date);
  
  this.noti.notification(this.notificatn).subscribe(data=>{
    console.log(data);
  })
  this.notificatn.uId=sessionStorage.getItem("uId");
  console.log(this.notificatn);
   
 }
  
  Clear() 
  {
    this.notificatn= new notification();
  
 }
}
