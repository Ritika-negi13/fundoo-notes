import { Component,ViewChild,ElementRef } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';

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
  email!:string;
  constructor(private router:Router){}
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
    this.router.navigate(['/dashboard']);
  }

}
