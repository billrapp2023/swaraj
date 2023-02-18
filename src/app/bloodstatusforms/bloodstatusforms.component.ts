import { Component, OnInit } from '@angular/core';
import { Bloodstatusform } from '../model/bloodstatusform';
import { ToastrManager } from 'ng6-toastr-notifications';
import { BloodstatusformService } from './bloodstatusform.service';

@Component({
  selector: 'app-bloodstatusforms',
  templateUrl: './bloodstatusforms.component.html',
  styleUrls: ['./bloodstatusforms.component.css']
})
export class BloodstatusformsComponent implements OnInit {
public bloodstatusform1:Bloodstatusform;
  constructor(public toastr: ToastrManager,public ser:BloodstatusformService) {
    this.bloodstatusform1=new Bloodstatusform();
   }


  ngOnInit() {
  }
Submit()
{
  console.log("Bloodgroup --->"+this.bloodstatusform1.statusbg);
  console.log("Bloodlevel --->"+this.bloodstatusform1.statusbl);
  console.log("Status --->"+this.bloodstatusform1.status);

  if(this.bloodstatusform1.statusbg!=""&&this.bloodstatusform1.statusbl!=""&&this.bloodstatusform1.status&&this.bloodstatusform1.statusbl.length<3)
  {
    
    console.log(this.bloodstatusform1);
    this.ser.bloodstatus(this.bloodstatusform1).subscribe(data=>{
      
      console.log(data);
      this.toastr.successToastr("Updated Successfully!");
    })
  }
  else if(this.bloodstatusform1.statusbl.length>2)
  {
    console.log("hello");
      this.toastr.errorToastr("Enter a valid level!")
  }
      else
      {
        this.toastr.errorToastr("You must fill all necessary fields!")
      }
    
 
console.log(this.bloodstatusform1);
this.bloodstatusform1.uId=sessionStorage.getItem("uId")

}
}
