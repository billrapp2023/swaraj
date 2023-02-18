import { Component } from '@angular/core';
import { Login } from './model/form1';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { Forget } from './model/forgot';
import { ToastrManager } from 'ng6-toastr-notifications';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public fg:Forget;

  title = 'blood';


  public logi:Login;
  

  public commonView=true;
  public adminView=false;
  public hospitalHeadView=false;
  public hospitalEmpView=false;

  public loginData:any=[];



  constructor(private service:AppService,private router:Router,private fog:AppService,private toastr:ToastrManager){
    this.fg=new Forget()
    this.logi=new Login();

    if(sessionStorage.length>0)
    {
      let loginType:any;

      loginType=sessionStorage.getItem("loginType")
      if(loginType=="admin")
      {
      this.commonView=false;
      this.adminView=true;
      this.hospitalEmpView=false;
      this.hospitalHeadView=false;
      this.router.navigate(['/admin'])
      }
      else if(loginType=="staff")
      {
      this.commonView=false;
      this.adminView=false;
      this.hospitalEmpView=true;
      this.hospitalHeadView=false;
      this.router.navigate(['/staff'])
      }
      else if(loginType=="head")
      {
      this.commonView=false;
      this.adminView=false;
      this.hospitalEmpView=false;
      this.hospitalHeadView=true;
      this.router.navigate(['/head']) 
      }
      else
      {
        this.commonView=true;
        this.adminView=false;
        this.hospitalEmpView=false;
        this.hospitalHeadView=false;
        this.router.navigate(['/carousel'])
      }



    }

  }


  public loginDatata:any;
  login(){

    console.log("login ");


    this.service.login(this.logi).subscribe(data=>{
      this.loginData=data;

      if(this.loginData.length>0)
      {
        sessionStorage.setItem("loginType",this.loginData[0].type)
        sessionStorage.setItem("uId",this.loginData[0].uId)
        window.location.href="http://localhost:4200"
      }
      else
      {
        window.alert("Invalid username or password!");
      }
    })




  }
  logout()
  {
    sessionStorage.removeItem("loginType");
    sessionStorage.removeItem("uId")
    window.location.href="http://localhost:4200"
    
  
  }

  send()
  {
    if(this.fg.mail!="")
  {
      this.toastr.successToastr('password successfully send to registered email adress','success'),console.log(this.fg)
    }
    let js=JSON.stringify(this.fg);
    let ne=JSON.parse(js);
    console.log(ne);
    this.fog.forgotPassword(this.fg).subscribe(data=>{
    console.log("data sended...");
    
    })
     console.log(this.fg) 
    // console.log(this.fg);

  }



//   print(): void {
//     let printContents, popupWin;
//     printContents = document.getElementById('print-section').innerHTML;
//     popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
//     popupWin.document.open();
//     popupWin.document.write(`
//       <html>
//         <head>
//           <title>Print tab</title>
//           <style>
//           //........Customized style.......
//           </style>
//         </head>
//     <body onload="window.print();window.close()">${printContents}</body>
//       </html>`
//     );
//     popupWin.document.close();
// }
  
}
