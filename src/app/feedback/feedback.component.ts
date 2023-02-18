import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { feedback } from '../model/feedback';
import { DatePipe } from '@angular/common';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  public feedback:feedback;
  public dt:any;
  constructor(public toastr: ToastrManager,private datePipe: DatePipe,private fb:FeedbackService) {this.feedback=new feedback
    this.dt=new Date()
    console.log(this.dt)
    this.dt = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    console.log(this.dt)
    this.feedback.date=this.dt;}

  ngOnInit() {
  }
  submit(){
    console.log("name --->"+this.feedback.fullname);
    console.log("feedback -->"+this.feedback.feedback);
    console.log("date-->"+this.feedback.date);

    if(this.feedback.fullname!=""&&this.feedback.feedback!="")
    {
      this.fb.feedbacks(this.feedback).subscribe(data=>{
        console.log(data);
        this.toastr.successToastr('Feedback sent succesfully');
      
      })
      console.log(this.feedback);
     
    }

else{
  this.toastr.errorToastr("Fill all the fields");
  
}
this.feedback.uId=sessionStorage.getItem("uId");

console.log(this.feedback);
}
}