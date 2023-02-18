import { Component, OnInit } from '@angular/core';
import { Reply } from '../model/reply';
import { ReplyService } from './reply.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  public reply:Reply;
  public dt:any;
  constructor(private repli:ReplyService,private datePipe: DatePipe) {this.reply= new Reply 
    this.dt=new Date()
    console.log(this.dt)
    this.dt = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    console.log(this.dt)
    this.reply.dateofreply=this.dt;
  }

  ngOnInit() {
  }
submit()
{
  this.reply.cid=sessionStorage.getItem("cid")
  console.log("reply -->"+this.reply.reply);
  console.log("dateofreply-->"+this.reply.dateofreply);

  
    this.repli.reply(this.reply).subscribe(data=>{
      console.log(data);
      
    })
    this.reply.uId=sessionStorage.getItem("uId");
  
}
}
