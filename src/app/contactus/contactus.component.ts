import { Component, OnInit } from '@angular/core';
import { feedback } from '../model/feedback';
import { ToastrManager } from 'ng6-toastr-notifications';
import { com } from '../model/complaint';
import { DatePipe } from '@angular/common';
import { ContactusService } from './contactus.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  public complaint:com;
  public dt:any;
  constructor(public toastr: ToastrManager,private datePipe: DatePipe,private comp:ContactusService ) { 
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