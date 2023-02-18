import { Component, OnInit } from '@angular/core';
import { OrgansearchserviceService } from './organsearchservice.service';

@Component({
  selector: 'app-organsearch',
  templateUrl: './organsearch.component.html',
  styleUrls: ['./organsearch.component.css']
})
export class OrgansearchComponent implements OnInit {
  public organsearch;
  constructor(private organsearch1:OrgansearchserviceService) { 
    // this.loadData()
  }

  ngOnInit() {
  }
 
//   loadData()
// {
//   this.organsearch1.getData().subscribe((organsearch:any)=>{
//     this.organsearch=organsearch;
//     console.log(this.organsearch);
// })
// }
public data:any;
submit()
{
  let dt={blood:this.bg,org:this.org}
  console.log(dt)
  this.organsearch1.getData(dt).subscribe((data:any)=>{
    this.data=data;
//  let dt={organ:this.org,bloodgroup:this.bg}
console.log(data)
  console.log(dt)
})
}

public org:any;
public bg:any;
organ(event)
{
  this.org=event.target.value;
}

selected(event)
{
this.bg=event.target.value;
}
}