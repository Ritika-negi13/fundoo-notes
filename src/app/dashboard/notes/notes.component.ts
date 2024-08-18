import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  @Output() title=new EventEmitter();
  notesList!:any[];
  constructor(private httpClient:HttpclientService){}

  ngOnInit(): void {
    this.httpClient.getAllNotes().subscribe({
      next:(res:any)=>{
        console.log("res",res.data.data);
        this.notesList = res.data.data;
        this.filterData();
      },
      error:(err)=>{
        console.log("err",err);
      }
    })
  }
  filterData(){
    this.notesList=this.notesList.filter((item)=>{
       if(item.isArchived==false || item.isDeleted==false)
      {
        return item;
      }
    })
  }
}
