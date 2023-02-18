import { Component, OnInit } from '@angular/core';
import { ApproveService } from './approve.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(private approve:ApproveService) { }

  ngOnInit() {
    this.loadData();
  }
  public data:any;
  loadData()
  {
    this.approve.getData().subscribe(data=>{
      this.data=data;
      console.log(data);
    })
  }

  aprove(event)
  {
    this.approve.aprove(event.target.id).subscribe(data=>{
      console.log(data);
      this.loadData
      ()
    })
  }

  reject(event)
  {
    this.approve.reject(event.target.id).subscribe(data=>{
      console.log(data);
      this.loadData
      ()
    })
  }

}
