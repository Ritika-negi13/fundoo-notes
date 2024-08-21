import { Component } from '@angular/core';
import { DataService } from '../service/userdata/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private data:DataService,private router:Router){}
 options:any=["English","Hindi"]
  firstname!:string;
  lastname!:string;
  submit(){
    this.data.getname(this.firstname,this.lastname);
    this.router.navigate(['/basicinfo'])
  }
}
