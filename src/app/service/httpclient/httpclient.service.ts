import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  constructor(private http:HttpClient) { }
  accesstoken=localStorage.getItem('access_token')
  validateLogin(data:any){
    
    return this.http.post("https://fundoonotes.incubation.bridgelabz.com/api/user/login",data)
  }
  getname(){
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/user?access_token="+`${this.accesstoken}`)
  }
  getAllNotes(){
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token="+`${this.accesstoken}`) 
  }
  addnewnote(title:any ,description:any){
    return this.http.post("https://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes?access_token="+`${this.accesstoken}`,{"title":title,"description":description})
  }
  editnote(data:any){
    return this.http.patch("https://fundoonotes.incubation.bridgelabz.com/api/notes/"+`${data.id}` +"?access_token="+`${this.accesstoken}`,data)
  }
  newuser(data:any){
    console.log("working")
    console.log(data)
    return this.http.post("https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",data)
  }
}
