import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    flag=false;
    changeColor(item:any){  
        console.log("dyuihgbnm");
        this.flag=!this.flag;
    } 
}
