import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BasicinfoComponent } from './basicinfo/basicinfo.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { NotesComponent } from './dashboard/notes/notes.component';
import { RemindersComponent } from './dashboard/reminders/reminders.component';
import { TrashComponent } from './dashboard/trash/trash.component';
import { ArchiveComponent } from './dashboard/archive/archive.component';
import { authGuard } from './auth/auth.guard';

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
    canActivate:[authGuard],
    children:[
      {
        path:'',
        component:NotesComponent,
      },
      {
        path:'notes',
        component:NotesComponent,
      },
      {
        path:'reminders',
        component:RemindersComponent
      },
      {
        path:'trash',
        component:TrashComponent
      },
      {
        path:'archive',
        component:ArchiveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
