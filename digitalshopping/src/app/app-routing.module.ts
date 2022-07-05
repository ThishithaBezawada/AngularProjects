import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterRetailerComponent } from './register-retailer/register-retailer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RetailerLoginComponent } from './retailer-login/retailer-login.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
const routes: Routes = [ {path:'home', component: HomeComponent},
{path:'userRegister',component:RegisterUserComponent},
{path:'userLogin',component:UserLoginComponent},
{path:'registerRetailer',component:RegisterRetailerComponent},
{path:'retailerLogin',component:RetailerLoginComponent},
{path: 'registerAdmin',component:RegisterAdminComponent},
{path:'adminLogin',component:AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
