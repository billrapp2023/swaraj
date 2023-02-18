import { Component, OnInit } from '@angular/core';
import { Login } from '../model/form1';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
public login1:Login;
  
  constructor() { this.login1=new Login()}

  ngOnInit() {
  }
submit()
{
  console.log(this.login1);
// console.log(this.userName);
// console.log(this.passWord);

}
}
