import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label,Color } from 'ng2-charts';
import { BloodstatusService } from './bloodstatus.service';
import { FormControl } from '@angular/forms';
import { INgxSelectOption } from 'ngx-select-ex';


@Component({
  selector: 'app-bloodstatus',
  templateUrl: './bloodstatus.component.html',
  styleUrls: ['./bloodstatus.component.css']
})
export class BloodstatusComponent implements OnInit {

  public items: string[] = ['Laxmi Megan Multispeciality Hospital'];




    
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Blood Group';
  showYAxisLabel = true;
  yAxisLabel = 'Blood Level';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  single: any=[];
  view: any[] = [1000, 600];

  public ngxControl = new FormControl();
 
  private _ngxDefaultTimeout;
  private _ngxDefaultInterval;
  private _ngxDefault;


  constructor(private bldService:BloodstatusService) {

    this.bldService.gets().subscribe(data=>{
      let datas:any=[];
      datas=data

      for (let index = 0; index < datas.length; index++) {
        const element = datas[index];
        console.log(element.HospName)
        this.items[index]=element.HospName
        
      }




    })

    this.bldService.getData(sessionStorage.getItem("uId")).subscribe(data=>{
      this.single=data;
      this.single.forEach(element => {
        console.log(element.value)
        
        
      });


    })



    this._ngxDefaultTimeout = setTimeout(() => {
      this._ngxDefaultInterval = setInterval(() => {
          const idx = Math.floor(Math.random() * (this.items.length - 1));
          this._ngxDefault = this.items[idx];
          // console.log('new default value = ', this._ngxDefault);
      }, 2000);
  }, 2000);





   }

  hospitalSelected(event){
    console.log(event.target.value)
  }


  public inputTyped = (source: string, text: string) => console.log('SingleDemoComponent.inputTyped', source, text);
 
    public doFocus = () => console.log('SingleDemoComponent.doFocus');
 
    public doBlur = () => console.log('SingleDemoComponent.doBlur');
 
    public doOpen = () => console.log('SingleDemoComponent.doOpen');
 
    public doClose = () => console.log('SingleDemoComponent.doClose'); 
 
    public doSelect = (value: any) =>  console.log(value) ;
 
    public doRemove = (value: any) => console.log('SingleDemoComponent.doRemove', value);
 
    public doSelectOptions = (options: INgxSelectOption[]) =>{
      console.log(options)
    } ;
  
  

  ngOnInit()
  {
this.get()
  }


  ngOnDestroy(): void {
    clearTimeout(this._ngxDefaultTimeout);
    clearInterval(this._ngxDefaultInterval);
}

public doNgxDefault(): any {
    return this._ngxDefault;
}


public get()
{
  this.bldService.gets().subscribe(data=>{
    console.log(data);

    let dt:any=[];

    let d:any=data

    for (let index = 0; index < d.length; index++) {
      const element = d[index].HospOwn;
      dt[index]=element;
      
    }
    console.log(dt)



  })
}

}
