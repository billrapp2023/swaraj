import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { AdminComponent } from './admin/admin.component';
import { AddhospitalComponent } from './addhospital/addhospital.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { OrganregComponent } from './organreg/organreg.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { DonorsearchComponent } from './donorsearch/donorsearch.component';
import { BloodstatusComponent } from './bloodstatus/bloodstatus.component';
import { BloodstatusformsComponent } from './bloodstatusforms/bloodstatusforms.component';
import { OrgansearchComponent } from './organsearch/organsearch.component';
import { BlooddonorformComponent } from './blooddonorform/blooddonorform.component';
import { DonationinfotableComponent } from './donationinfotable/donationinfotable.component';
import { Donorsearchv2Component } from './donorsearchv2/donorsearchv2.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeadComponent } from './head/head.component';
import { ViewhospitalComponent } from './viewhospital/viewhospital.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ViewfeedbackComponent } from './viewfeedback/viewfeedback.component';
import { AlertComponent } from './alert/alert.component';
import { ViewcomlplaintComponent } from './viewcomlplaint/viewcomlplaint.component';
import { ComplaintreplyComponent } from './complaintreply/complaintreply.component';
import { StaffComponent } from './staff/staff.component';
import { StaffcomplaintComponent } from './staffcomplaint/staffcomplaint.component';
import { ViewreplyComponent } from './viewreply/viewreply.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { ViewSreplyComponent } from './view-sreply/view-sreply.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { UpdategalleryComponent } from './updategallery/updategallery.component';
import { ApproveComponent } from './approve/approve.component';
import { UpdateaboutComponent } from './updateabout/updateabout.component';
import { ReplyComponent } from './reply/reply.component';
import { UpdatecontactusComponent } from './updatecontactus/updatecontactus.component';
import { ProfileComponent } from './profile/profile.component';
import { TestComponent } from './test/test.component';
import { Bloodstatusver2Component } from './bloodstatusver2/bloodstatusver2.component';
import { DonoreditComponent } from './donoredit/donoredit.component';
import { EmployeeprofileComponent } from './employeeprofile/employeeprofile.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path:"form1",component:Form1Component},
{path:"admin",component:AdminComponent},
{path:"addhospital",component:AddhospitalComponent},
{path:"addemployee",component:AddemployeeComponent},
{path:"organreg",component:OrganregComponent},
{path:"adddonor",component:AdddonorComponent},
{path:"donorsearch",component:DonorsearchComponent},
{path:"bloodstatus",component:BloodstatusComponent},
{path:"bloodstatusforms",component:BloodstatusformsComponent},
{path:"organsearch",component:OrgansearchComponent},
{path:"blooddonorform",component:BlooddonorformComponent},
{path:"donationinfotable",component:DonationinfotableComponent},
{path:"donorsearchv2",component:Donorsearchv2Component},
{path:"viewemployee",component:ViewemployeeComponent},
{path:"",component:CarouselComponent},
{path:"head",component:HeadComponent},
{path:"viewhospital",component:ViewhospitalComponent},
{path:"contactus",component:ContactusComponent},
{path:"aboutus",component:AboutusComponent},
{path:"contactform",component:ContactformComponent},
{path:"viewfeedback1",component:ViewfeedbackComponent},
{path:"alert",component:AlertComponent},
{path:"viewcomlplaint",component:ViewcomlplaintComponent},
{ path:"complaintreply",component:ComplaintreplyComponent},
{path:"staff",component:StaffComponent},
{path:"staffcomplaint",component:StaffcomplaintComponent},
{path:"viewreply",component:ViewreplyComponent},
{path:"complaint",component:ComplaintComponent},
{path:"view_sreply",component:ViewSreplyComponent},
{path:"complaintreply",component:ComplaintreplyComponent},
{path:"feedback",component:FeedbackComponent},
{path:"gallery",component:GalleryComponent},
{path:"forgotpwd",component:ForgotpwdComponent},
{path:"updategallery",component:UpdategalleryComponent},
{path:"approve",component:ApproveComponent},
{path:"updateabout",component:UpdateaboutComponent},
{path:"notification",component:AlertComponent},
{path:"reply",component:ReplyComponent},
{path:"updatecontactus",component:UpdatecontactusComponent},
{path:"profile",component:ProfileComponent},
{path:"test",component:TestComponent},
{path:"bloodstatusver2",component:Bloodstatusver2Component},
{path:"donoredit",component:DonoreditComponent},
{path:"employeeprofile",component:EmployeeprofileComponent},
{path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
