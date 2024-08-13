import { Component } from '@angular/core';

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
  classValue='basicinfo';
  changePage(e:Event){
    console.log(this.classValue);
    e.preventDefault();
    if(this.classValue=='basicinfo')
    {
      this.classValue='username';
    }
    else
    if(this.classValue=='username')
    {
      this.classValue='password';
    }
  }
}
