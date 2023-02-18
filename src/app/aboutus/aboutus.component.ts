import { Component, OnInit } from '@angular/core';
import { AboutusService } from './aboutus.service';
import { Aboutus } from '../model/aboutus';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
public about:Aboutus;
  constructor(private ser:AboutusService) {
    this.loadData()
   }

  ngOnInit() {
    this.loadData();
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
