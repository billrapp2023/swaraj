import { Component, OnInit } from '@angular/core';
import { DonatnserviceService } from './donatnservice.service';
import { INgxSelectOption } from 'ngx-select-ex';
import { FormControl } from '@angular/forms';
import { Recep } from '../model/recep';

@Component({
  selector: 'app-donationinfotable',
  templateUrl: './donationinfotable.component.html',
  styleUrls: ['./donationinfotable.component.css']
})
export class DonationinfotableComponent implements OnInit {
  public items: string[] = ['Laxmi Megan Multispeciality Hospital'];
  public dontn;
  public don:Recep
  constructor(private donatn:DonatnserviceService) {
    this.don=new Recep();
    this.loadData()
    this.getNames()
    this.getDonaorList()
    this.getRecepientList()
    this.getDonateList()
   }

  // ngOnInit() {
  //   this.loadData()
  // }


  public valueSelected=0;
  public selectControl = new FormControl();
  ngOnInit(): void {
    this.selectControl.valueChanges
      .subscribe((subscriptionTypeId: number) => {
        const obj = this.kk.find(item => item.did === subscriptionTypeId);
        console.log(
          'subscriptionTypeId', subscriptionTypeId
        );
          this.valueSelected=subscriptionTypeId

        // this.valueSelected=subscriptionTypeId.did
        console.log("id --> "+this.valueSelected)
        if(+this.valueSelected>0)
        {
          this.getByID()
        }
        
      });
  }


  public data:any;
  loadData()
  {
    this.donatn.getData().subscribe((data:any)=>{
      this.data=data;
      console.log(this.data)
    })
}

public getByID()
{
  this.donatn.getByID(this.valueSelected).subscribe(data=>{
    console.log(data)
  })
}

DonaorList:any=[]
getDonaorList()
{
  this.donatn.getDonorList().subscribe(data=>{
    console.log(data)
    this.DonaorList=data;
  })
}
RecepientList:any=[]
getRecepientList()
{
  this.donatn.getRecepientList().subscribe(data=>{
    console.log(data)
    this.RecepientList=data;
  })
}
Donate:any=[]
getDonateList()
{
  this.donatn.getDonateList().subscribe(data=>{
    console.log(data)
    this.Donate=data;
  })
}
public kk:any=[]
public getNames()
{
    this.donatn.getNames().subscribe((data:any)=>{
      console.log(data)
      if(data.length>0)
      data.forEach(element => {
        this.kk[this.kk.length]=element;
      });
      
      let datas:any=[];
      datas=data

      for (let index = 0; index < datas.length; index++) {
        const element = datas[index];
        console.log(element.Name)
        this.items[index]=element.Name
      }
    })
}



recepSelected(event)
{
  this.donatn.getRecDetails(event.target.value).subscribe((data:Recep)=>{
    console.log(this.data)
    this.don=data;
  })
}

donorSelected(event)
{

  this.don.did=+event.target.value;
  console.log(this.don)
  this.donatn.save(this.don).subscribe(data=>{
    console.log(data)
  })
}

submit()
{

}
}