import { Component, OnInit } from '@angular/core';
import { Employeeprofile } from '../model/employeeprofile';
import { Router } from '@angular/router';
import { EmployeeprofileService } from './employeeprofile.service';

@Component({
  selector: 'app-employeeprofile',
  templateUrl: './employeeprofile.component.html',
  styleUrls: ['./employeeprofile.component.css']
})
export class EmployeeprofileComponent implements OnInit {
  public profile:Employeeprofile
  constructor(private route:Router,private profile1:EmployeeprofileService,private use:EmployeeprofileService) { 
    this.profile=new Employeeprofile
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
      this.profile.FName=this.data[0].EmpName;
      this.profile.Designtn=this.data[0].Designation;
      this.profile.Emailid=this.data[0].Empemail;
      this.profile.Empid=this.data[0]. EmpId;
      this.profile.EmpPhnum=this.data[0].EmpPhn;
     
     

      console.log(this.profile.FName)
    })
  }
}
