import { Injectable } from '@angular/core';
import { HttpclientService } from '../httpclient/httpclient.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data : {
    "firstName": string,
    "lastName": string,
    "service": 'string',
    "email": string,
    "password":string
  } = {
    "firstName": "",
    "lastName": "",
    "service": 'string',
    "email": "",
    "password":""
  }
  constructor(private httpclient:HttpclientService) { }
  getname(firstname:string,lastname:string){
    this.data.firstName=firstname;
    this.data.lastName=lastname;
  }
  getusername(username:string){
    this.data.email=username;
  }
  getpassword(password:string){
    this.data.password=password;
    this.userSignIn()
  }
  userSignIn() {
    console.log(this.data)
    // this.httpclient.newuser(this.data);

    this.httpclient.newuser(this.data).subscribe({
      next:(res:any)=>{
        console.log("SUCCESS");

        console.log(res);
      },error(err:any){
        console.log("failed");
        
        console.log(err);
      }
  });
  }

}
