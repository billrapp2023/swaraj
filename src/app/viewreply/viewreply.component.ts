import { Component, OnInit } from '@angular/core';
import { ViewreplyService } from './viewreply.service';

@Component({
  selector: 'app-viewreply',
  templateUrl: './viewreply.component.html',
  styleUrls: ['./viewreply.component.css']
})
export class ViewreplyComponent implements OnInit {
  public view:any;

  constructor(private viewreply:ViewreplyService) {
    this.loadData()
   }

  ngOnInit() {
  }
  loadData()
  {
    this.viewreply.getData().subscribe((view:any)=>{
      this.view=view;
      console.log(this.view)
  })
}

}
