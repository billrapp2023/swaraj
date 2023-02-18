import { Component, OnInit } from '@angular/core';
import { Addemployee } from '../model/addemployee';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AddemployeeService } from './addemployee.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
public addemp:Addemployee;
registerForm: FormGroup;
submitted = false;
  constructor(public toastr: ToastrManager,private ser:AddemployeeService,private formBuilder: FormBuilder) {this.addemp=new Addemployee() }

  ngOnInit() {this.registerForm = this.formBuilder.group({
    Fname: ['', Validators.required],
    Designtn: ['', Validators.required],
    Empid: ['', Validators.required],
    EmpPhnum: ['', Validators.required],
    Emailid: ['', [Validators.required, Validators.email]]
  });
  }
  get f() {
    return this.registerForm.controls; 
   }
// Submit()
// {
//   console.log(this.addemp);
//   this.ser.register(this.addemp).subscribe(data=>{
//     console.log(data);
//     this.toastr.successToastr('Employee added succesfully');
//   })
  
// }
onSubmit(event:any) {

  this.submitted = true;

   // stop here if form is invalid
   if (!this.registerForm.valid) {
       return;
   }
   else
   {
       console.log(event) 
       console.log(this.addemp);
       this.ser.register(this.registerForm.value).subscribe(data=>{
         console.log(data);
         this.toastr.successToastr('Employee added succesfully');
       })
   }
  }
}
