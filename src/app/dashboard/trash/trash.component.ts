import { Component } from '@angular/core';
import { HttpclientService } from 'src/app/service/httpclient/httpclient.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent {
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
       if(item.isDeleted==true)
      {
        return item;
      }
    })
  }
}
