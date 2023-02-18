import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HeadService } from './head.service';
import { Profile } from '../model/profile';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  public Hospinfo:Profile;
  public items: string[] = ['Laxmi Megan Multispeciality Hospital'];
  constructor(private info:HeadService,private noti:HeadService,private hosp:HeadService,private alert:HeadService,private profile:HeadService) { 
    this.loadData()
    this.loadData2()
    this.loadData3()
    this.load()
    this.hosp.gets().subscribe(data=>{
      let datas:any=[];
      datas=data

      for (let index = 0; index < datas.length; index++) {
        const element = datas[index];
        console.log(element.HospName)
        this.items[index]=element.HospName
        
      }




    })
    
    // this.Hospinfo.uId=sessionStorage.getItem("uId");
  }
  currChanged(event)
  {
    console.log(event.target.value)
    this.Hospinfo.HospName=event.target.value;
    
  }
  ngOnInit() {
  }
  public data:any;
  loadData()
{
  this.noti.getData().subscribe((data:any)=>{
    this.data=data;
    console.log(this.data);
  
})
}
loadData2()
  {
    this.alert.getblood().subscribe((data:any)=>{
      this.data=data;
      console.log(this.data)
    })
}

public flag=false;
public datas:any=[]
selected(event)
{
  console.log(event.target.value)

  this.alert.getSearchResults(event.target.value).subscribe((data:any)=>{
    this.data=data
    // console.log(this.data)
  })
}
getSearchResults(event)
{
  console.log(event.target.id)
  this.alert.getSearchResults(event.target.id).subscribe((data:any)=>{
    console.log(data);
    console.log("size")
    console.log(+data.length)
    // if(data.length>0)
    // {
    //   this.flag=false;
    //   this.data=data;
    // }
    // else
    // {
    //   this.flag=true;
    // }
  })
}
public data2:any=[];
loadData3()
{
  this.info.getProfileview(sessionStorage.getItem("uId")).subscribe((data2:any)=>{
    this.data2=data2;
    console.log(this.data2)

      this.Hospinfo.HospName=this.data2[0].HospName;
      this.Hospinfo.HospHead=this.data2[0].HospHead;
      this.Hospinfo.HospAddrs=this.data2[0].HospAddrs;
      this.Hospinfo.HospPhNum=this.data2[0].HospPhNum;
      this.Hospinfo.Telephone=this.data2[0].HospTel;
      this.Hospinfo.Heademail=this.data2[0].Heademail;
      this.Hospinfo.About=this.data2[0].About;
      this.Hospinfo.image=this.data2[0].image;
     
      console.log(this.Hospinfo.HospName);
  })
}
public data3:any;
load()
{
  
    this.alert.loadJson().subscribe(data3=>{
      this.data3=data3;
      console.log(this.data3);
      })
    }
}