import { Component, OnInit } from '@angular/core';
import { DonorsearchService } from './donorsearch.service';

@Component({
  selector: 'app-donorsearch',
  templateUrl: './donorsearch.component.html',
  styleUrls: ['./donorsearch.component.css']
})
export class DonorsearchComponent implements OnInit {
  public data;
  constructor(private donorsearch:DonorsearchService) { this.loadData()}

  ngOnInit() {
  }
  loadData()
  {
    this.donorsearch.getData().subscribe((data:any)=>{
      this.data=data;
      console.log(this.data)
    })
}

public flag=false;
public datas:any=[]
selected(event)
{
  console.log(event.target.value)

  this.donorsearch.getSearchResult(event.target.value).subscribe((data:any)=>{
    this.datas=data
    // console.log(this.data)
  })
}



print(): void {
  let printContents, popupWin;
  printContents = document.getElementById('print-section').innerHTML;
  popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
  popupWin.document.open();
  popupWin.document.write(`
    <html>
      <head>
        <title>Print tab</title>
        <style>
        //........Customized style.......
        </style>
      </head>
  <body onload="window.print();window.close()">${printContents}</body>
    </html>`
  );
  popupWin.document.close();
}
getSearchResult(event)
{
  console.log(event.target.value)
  this.donorsearch.getSearchResult(event.target.value).subscribe((data:any)=>{
    console.log(data);
    console.log("size")
    console.log(+data.length)
    if(data.length>0)
    {
      this.flag=false;
      this.data=data;
    }
    else
    {
      this.flag=true;
    }
  })
}

}
