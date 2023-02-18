import { Component, OnInit } from '@angular/core';
import { ViewcomlplaintService } from './viewcomlplaint.service';
import { com } from '../model/complaint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcomlplaint',
  templateUrl: './viewcomlplaint.component.html',
  styleUrls: ['./viewcomlplaint.component.css']
})
export class ViewcomlplaintComponent implements OnInit {
  // public viewcomplaint;
  public complaints:com;
  constructor(private viewcomlplaint:ViewcomlplaintService,private router:Router,private viewcomp:ViewcomlplaintService) {
    this.load()
    this.load2()
   }

  ngOnInit() {
    this.load();
    this.load2();
  }
  public data1:any;
  public data2:any;
  load()
  

  {this.viewcomp.getData().subscribe((data1:any)=>{
    this.data1=data1;
    
    console.log(data1);
   
    })
  }
  load2()
  {
    this.viewcomlplaint.getData2().subscribe((data2:any)=>{
      this.data2=data2;
      
      console.log(data2);
    })
  }
  // public tempDate:any;
  // update(event)
  // {
    
  //   console.log("-------------------------------------");
  //   this.tempDate=this.viewcomlplaint[event.target.id];
  //   console.log(this.tempDate);
  //   this.complaints.complaint=this.tempDate.complaint;
  //   this.complaints.complaint=this.tempDate.complaint;
  //   console.log(this.complaints.reply);
//   }
//   upd(){

//     console.log(this.viewcomplaint);
// }


reply(event)
{
  sessionStorage.setItem("cid",event.target.id)
  this.router.navigate(['reply'])
}
}