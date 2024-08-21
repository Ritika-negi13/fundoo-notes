import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  constructor(private http:HttpClient) { }
  getAllNotes(){
    console.log("working")
    let accesstoken=localStorage.getItem('access_token')
    console.log(accesstoken)
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token="+`${accesstoken}`) 
  }
  validateLogin(data:any){
    
    return this.http.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login",data)
  }
  newuser(data:any){
    console.log("working")
    console.log(data)
    return this.http.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",data)
  
  }
}
