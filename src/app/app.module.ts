import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { AdminComponent } from './admin/admin.component';
import { AddhospitalComponent } from './addhospital/addhospital.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ng6-toastr-notifications';
import { OrganregComponent } from './organreg/organreg.component';
import { DonationComponent } from './donation/donation.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { DonorsearchComponent } from './donorsearch/donorsearch.component';
import { BloodstatusComponent } from './bloodstatus/bloodstatus.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { BloodstatusformsComponent } from './bloodstatusforms/bloodstatusforms.component';
import { OrgansearchComponent } from './organsearch/organsearch.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { BlooddonorformComponent} from './blooddonorform/blooddonorform.component';
import { DonationinfotableComponent } from './donationinfotable/donationinfotable.component';
import { HttpClientModule } from "@angular/common/http";
import { Donorsearchv2Component } from './donorsearchv2/donorsearchv2.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HeadComponent } from './head/head.component';
import { StaffComponent } from './staff/staff.component';
import { ViewhospitalComponent } from './viewhospital/viewhospital.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ChartsModule } from 'ng2-charts';
import { ContactusComponent } from './contactus/contactus.component';
import { ContactformComponent } from './contactform/contactform.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { AlertComponent } from './alert/alert.component';
import { ViewcomlplaintComponent } from './viewcomlplaint/viewcomlplaint.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ViewreplyComponent } from './viewreply/viewreply.component';
import { StaffcomplaintComponent } from './staffcomplaint/staffcomplaint.component';
import { ViewSreplyComponent } from './view-sreply/view-sreply.component';
import { DatePipe } from '@angular/common';
import { ComplaintreplyComponent } from './complaintreply/complaintreply.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxSelectModule } from 'ngx-select-ex';
import {ReactiveFormsModule} from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { ApprovehospComponent } from './approvehosp/approvehosp.component';
import { ApproveComponent } from './approve/approve.component';
import { UpdategalleryComponent } from './updategallery/updategallery.component';
import { UpdateaboutComponent } from './updateabout/updateabout.component';
import { UpdatecarouselComponent } from './updatecarousel/updatecarousel.component';
import { ReplyComponent } from './reply/reply.component';
import { UpdatecontactusComponent } from './updatecontactus/updatecontactus.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';

import { Bloodstatusver2Component } from './bloodstatusver2/bloodstatusver2.component';
import { DonoreditComponent } from './donoredit/donoredit.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    AdminComponent,
    AddhospitalComponent,
    AddemployeeComponent,
    OrganregComponent,
    DonationComponent,
    AdddonorComponent,
    DonorsearchComponent,
    BloodstatusComponent,
    BloodstatusformsComponent,
    OrgansearchComponent,
    ViewemployeeComponent,
    BlooddonorformComponent,
    DonationinfotableComponent,
    Donorsearchv2Component,
    HeadComponent,
    StaffComponent,
    ViewhospitalComponent,
    CarouselComponent,
    ContactusComponent,
    ContactformComponent,
    AboutusComponent,
    ViewfeedbackComponent,
    AlertComponent,
    ViewcomlplaintComponent,
    ComplaintComponent,
    ViewreplyComponent,
    StaffcomplaintComponent,
    ViewSreplyComponent,
    ComplaintreplyComponent,
    FeedbackComponent,
    GalleryComponent,
    ForgotpwdComponent,
    ApprovehospComponent,
    ApproveComponent,
    UpdategalleryComponent,
    UpdateaboutComponent,
    UpdatecarouselComponent,
    ReplyComponent,
    UpdatecontactusComponent,
    ProfileComponent,
    TestComponent,
    
    Bloodstatusver2Component,
    
    DonoreditComponent,
    
    EmployeeprofileComponent,
    
    HomeComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, ToastrModule.forRoot(),
    GoogleChartsModule.forRoot(),
    HttpClientModule,
    TooltipModule.forRoot(),
    ChartsModule,
    NgxChartsModule,
    NgxSelectModule,
    ReactiveFormsModule

  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
