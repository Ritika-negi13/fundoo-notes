import { Component } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 options:any=["English","Hindi"]
  firstname!:string;
  lastname!:string;
  
}
