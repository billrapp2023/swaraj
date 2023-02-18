import { Component, OnInit } from '@angular/core';
import { Organreg } from '../model/organreg';

@Component({
  selector: 'app-organreg',
  templateUrl: './organreg.component.html',
  styleUrls: ['./organreg.component.css']
})
export class OrganregComponent implements OnInit {
  public organ:Organreg;
  constructor() { this.organ=new Organreg()}
  
  ngOnInit() {
  }
  Submit()
  {
    console.log(this.organ);
  }
}
