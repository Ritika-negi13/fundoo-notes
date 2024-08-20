import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {
  constructor(private http:HttpClient) { }
  getAllNotes(){
    console.log("working")
    return this.http.get("https://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList?access_token=ARODMBkNgPeEIbNCwX0WolphSA4MDUU5joqXifgXtrqf1UU6FuUHHjIdxE8VMN4U") 
  }
}
