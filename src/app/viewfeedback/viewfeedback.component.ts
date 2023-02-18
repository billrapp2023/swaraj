import { Component, OnInit } from '@angular/core';
import { ViewfeedbackService } from './viewfeedback.service';

@Component({
  selector: 'app-viewfeedback',
  templateUrl: './viewfeedback.component.html',
  styleUrls: ['./viewfeedback.component.css']
})
export class ViewfeedbackComponent implements OnInit {
  public feedback;
  constructor(private feedback1:ViewfeedbackService) { 
    this.loadData()
  }

  ngOnInit() {
    this.loadData();
  }
  public data:any;
loadData()
{
  this.feedback1.getData().subscribe((data:any)=>{
    this.data=data;
    console.log(this.data)
})
}
}