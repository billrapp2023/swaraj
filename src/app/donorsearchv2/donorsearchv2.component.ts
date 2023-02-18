import { Component, OnInit } from '@angular/core';
import { Donorsearchv2Service } from './donorsearchv2.service';

@Component({
  selector: 'app-donorsearchv2',
  templateUrl: './donorsearchv2.component.html',
  styleUrls: ['./donorsearchv2.component.css']
})
export class Donorsearchv2Component implements OnInit {
  public data;
  constructor(private donorsearch2:Donorsearchv2Service) {  
    this.loadData()
  }

  ngOnInit() {
  }
  loadData()
  {
    this.donorsearch2.getData().subscribe((data:any)=>{
      this.data=data;
      console.log(this.data)
    })
}

}
