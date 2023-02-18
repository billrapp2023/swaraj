import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private  service:TestService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      blood: ['', Validators.required],
      firstName: ['', Validators.required],
      dob: ['', Validators.required],
      lastName: ['', Validators.required],
      gender:['', Validators.required],
      adhaar: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

 // convenience getter for easy access to form fields
 get f() {
   return this.registerForm.controls; 
  }

 onSubmit(event:any) {

  this.submitted = true;

   // stop here if form is invalid
   if (!this.registerForm.valid) {
       return;
   }
   else
   {
       console.log(event) 
    //  this.service.registerNew(event).subscribe((data:any)=>{
    //    console.log(data)
    //  })
   }
  }
}
