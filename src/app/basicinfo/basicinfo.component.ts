import { Component } from '@angular/core';
import { DataService } from '../service/userdata/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.scss']
})
export class BasicinfoComponent {
  selectedMonth!: string;
  selectedGender!:string;
  months:string[]=[
    'January','Febuary','March','April','May','June','July',
    'August','September','October','November','December'
  ];
  genders:string[]=[
    'Male','Female','Rather not say','Custom'
  ]
  username!:string;
  password!:string;
  classValue='basicinfo';
  constructor(private data:DataService,private router:Router){}
  changePage(e:Event){
    e.preventDefault();
    if(this.classValue=='basicinfo')
    {
      this.classValue='username';
    }
    else
    if(this.classValue=='username')
    {
      this.data.getusername(this.username)
      this.classValue='password';
    }
    else{
      console.log(this.password)
      this.data.getpassword(this.password)
      this.router.navigate(['/login']);
    }
  }
}
