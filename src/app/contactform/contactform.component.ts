import { Component, OnInit } from '@angular/core';
import { Aboutus } from '../model/aboutus';
import { ContactformService } from './contactform.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {
  public contact:Aboutus;
  constructor(private ser:ContactformService) {this.loadData() }

  ngOnInit() {this.loadData();
  }
  public data:any;
  loadData()
  {
    this.ser.getData().subscribe((data:any)=>{
      this.data=data;
      console.log(this.data)
  })
  }
}
