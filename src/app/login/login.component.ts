import { Component,ViewChild,ElementRef } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpclientService } from '../service/httpclient/httpclient.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  email='';
  password='';
  constructor(private router:Router,private http:HttpclientService){}
  openNewAccount(e : Event){
    e.preventDefault();
    //@ts-ignore
    document.getElementById('newcard').style.display = 'block';
  }
  @ViewChild('myInput') myInputElement!: ElementRef;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();
  ngOnInit(): void {
    setTimeout(() => {
      this.myInputElement.nativeElement.focus();
    }, 1000);
  }
  
  openDashboard() {
    console.log(this.email);
    console.log(this.password);
    this.http.validateLogin({"email":this.email,"password":this.password}).subscribe({
      next:(res:any)=>{
        const{id}=res;
        localStorage.setItem("name", res["firstName"]);
        console.log(res);
        localStorage.setItem("access_token",id);
        this.router.navigate(['/dashboard']);
      },error(err:any){
        console.log(err);
      }
  });
  }
}
