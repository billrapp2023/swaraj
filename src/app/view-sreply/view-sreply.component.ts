import { Component, OnInit } from '@angular/core';
import { ViewSreplyService } from './view-sreply.service';

@Component({
  selector: 'app-view-sreply',
  templateUrl: './view-sreply.component.html',
  styleUrls: ['./view-sreply.component.css']
})
export class ViewSreplyComponent implements OnInit {
  public view;
  constructor(private viewSreply:ViewSreplyService) {
    this.loadData()
  }
  

  ngOnInit() {
  }
  loadData()
  {
    this.viewSreply.getData().subscribe((view:any)=>{
      this.view=view;
      console.log(this.view)
  })
}

}
