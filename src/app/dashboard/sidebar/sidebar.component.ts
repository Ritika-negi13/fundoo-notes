import { Component } from '@angular/core';
import { OpensidebarService } from 'src/app/service/opensidebar/opensidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  flag!:string;
  constructor(private os:OpensidebarService){}
  ngOnInit(): void {
    this.os.flag.subscribe(flag => this.flag = flag);
    console.log(this.flag);
  }
  changeColor(e:any){
    console.log(e);
  }
}
