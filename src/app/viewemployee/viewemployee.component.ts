import { Component, OnInit } from '@angular/core';
import { ViewempserviceService } from './viewempservice.service';
import { Addemployee } from '../model/addemployee';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  public view;
  public updateEmployee:Addemployee;
  constructor(private viewempl:ViewempserviceService) { 
    this.updateEmployee=new Addemployee();
    
    this.loadData()
  }
  ngOnInit() {
    this.loadData();
  }
  public data:any;
  loadData()
  {
    this.viewempl.getData().subscribe((data:any)=>{
      this.data=data;     
      console.log(this.data)
  })
}

public tempDate:any;
update(event)
{
  
  this.tempDate=this.data[event.target.id];
  this.updateEmployee.Empid=this.tempDate.Empid;
  this.updateEmployee.FName=this.tempDate.FName;
  this.updateEmployee.Designtn=this.tempDate.Designtn;
  this.updateEmployee.EmpPhnum=this.tempDate.EmpPhnum;
  this.updateEmployee.Emailid=this.tempDate.Emailid;
  console.log(this.updateEmployee);
  console.log(this.view[event.target.id])
}


upd(){

  console.log(this.updateEmployee);
}
delete(event)
  {
    this.viewempl.deleteemp(event.target.id).subscribe(data=>{
      console.log(data);
      this.loadData
      ()
    })
  }
}
