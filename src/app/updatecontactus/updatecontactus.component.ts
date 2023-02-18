import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contactus';
import { UpdatecontactusService } from './updatecontactus.service';

@Component({
  selector: 'app-updatecontactus',
  templateUrl: './updatecontactus.component.html',
  styleUrls: ['./updatecontactus.component.css']
})
export class UpdatecontactusComponent implements OnInit {
  public contactus:Contact;
  constructor(private ser:UpdatecontactusService) { this.contactus= new Contact}

  ngOnInit() {
  }
  Submit()
  {
  console.log("num1-->"+this.contactus.number1);
  console.log("num2 -->"+this.contactus.number2);
  console.log("mail -->"+this.contactus.email);
  this.ser.contact(this.contactus).subscribe(data=>{
    console.log(data);
  })
  console.log(this.contactus);
}
}
