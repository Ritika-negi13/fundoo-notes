import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'basicinfo',
    component:BasicinfoComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'header',
        component:HeaderComponent
      },
      {
        path:'sidebar',
        component:SidebarComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
