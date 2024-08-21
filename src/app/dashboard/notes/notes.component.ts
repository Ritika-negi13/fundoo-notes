import { Component } from '@angular/core';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
  display:boolean=false;
  notesList!:any[];
  constructor(private httpClient:HttpclientService){}
  title!:string;
  description!:string;
  id!:any;
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
       if(item.isArchived===false && item.isDeleted===false)
      {
        return item;
      }
    })
  }
  addNote(event : any) {
    if(event.key === "Enter") {
      // api call to add new note
      this.httpClient.addnewnote(this.title,this.description).subscribe({
        next:(res:any)=>{
          console.log(res);
          window.location.reload();
        },error(err:any){
          console.log(err);
        }
    });
    }
  }
  opennote(){
    if(this.display==false)
      this.display=true;
    else
      this.display=false;
  }
  archiveData(event:any){
    event.isArchived=true;
    this.httpClient.editnote(event).subscribe({
      next:(res:any)=>{
        console.log(res);
        window.location.reload();
      },error(err:any){
        console.log(err);
      }
  });
  }
  opendelete(event:any){
    //@ts-ignore
    if(document.getElementById('delete').style.display=="block")
    {
      //@ts-ignore
      document.getElementById('delete').style.display="none";
      this.id='';
    }
    else
    {
      //@ts-ignore
      document.getElementById('delete').style.display="block";
      this.id=event;
    }

  }
  deleteNote(){
    this.id.isDeleted=true;
    this.httpClient.editnote(this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        window.location.reload();
      },error(err:any){
        console.log(err);
      }
  });
  }
}

