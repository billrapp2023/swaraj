import { Component, OnInit } from '@angular/core';
import { StaffService } from './staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  public notification;
  constructor(private ser:StaffService) { 
    this.loadData()
  }

  ngOnInit() {
    this.loadData()
  }
  public data:any;
  loadData()
  {
    this.ser.getData().subscribe((data:any)=>{
      this.data=data;
      
      console.log(data);
     
      })
  }

}
