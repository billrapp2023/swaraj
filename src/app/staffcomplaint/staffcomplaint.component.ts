import { Component, OnInit } from '@angular/core';
import { com } from '../model/complaint';
import { ToastrManager } from 'ng6-toastr-notifications';
import { DatePipe } from '@angular/common';
import { StaffcomplaintService } from './staffcomplaint.service';

@Component({
  selector: 'app-staffcomplaint',
  templateUrl: './staffcomplaint.component.html',
  styleUrls: ['./staffcomplaint.component.css']
})
export class StaffcomplaintComponent implements OnInit {
public complaint:com
public dt:any;
constructor(public toastr: ToastrManager,private datePipe: DatePipe,private comp:StaffcomplaintService) { 
  this.complaint=new com()
  this.dt=new Date()
  console.log(this.dt)
  this.dt = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
  console.log(this.dt)
  this.complaint.date=this.dt;}

ngOnInit() {
}
submit(){
  console.log("name --->"+this.complaint.fullname);
  console.log("feedback -->"+this.complaint.complaint);
  console.log("complaint-->"+this.complaint.date);

  if(this.complaint.fullname!=""&&this.complaint.complaint!="")
  {
    this.comp.complaints(this.complaint).subscribe(data=>{
      console.log(data);
      this.toastr.successToastr('Complaint sent succesfully');
    
    })
    console.log(this.complaint);
   
  }

else{
this.toastr.errorToastr("Fill all the fields");

}
this.complaint.uId=sessionStorage.getItem("uId");
console.log(this.complaint);
}
}
