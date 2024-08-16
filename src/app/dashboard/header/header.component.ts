import { Component } from '@angular/core';
import { OpensidebarService } from 'src/app/service/opensidebar/opensidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private os:OpensidebarService){}
  flag='false';
  opensideBar(){
    this.os.updateFlag(this.flag);
    if(this.flag=='true')
    {
      this.flag='false'
    }
    else
      this.flag='true';
  }
}
