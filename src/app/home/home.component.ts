import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Addhosp } from '../model/addhospital';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public home:Addhosp
  constructor(private ser:HomeService) {
    this.loadData()
    this.data= new Addhosp;
    
   }

  ngOnInit() {
    this.loadData()
  }
  public data:any;
  loadData()
  {
    console.log("helloo")
    this.ser.getProfileview(sessionStorage.getItem("uId")).subscribe((data:any)=>{
      this.data=data;
      
      console.log(this.data)
      this.home.HospName=this.data[0].HospName;
  })
  }
}
