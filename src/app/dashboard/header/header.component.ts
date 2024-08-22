import { Component } from '@angular/core';
import { OpensidebarService } from 'src/app/service/opensidebar/opensidebar.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/service/search/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private os:OpensidebarService,private router:Router,private ss:SearchService){}
  flag='false';
  search!:string;
  username = localStorage.getItem("name");
  opensideBar(){
    this.os.updateFlag(this.flag);
    if(this.flag=='true')
    {
      this.flag='false'
    }
    else
      this.flag='true';
  }
  logout(){
    this.router.navigate(['/login']);
    localStorage.removeItem('access_token');
  }
  onSearch(){
    this.ss.updateSearch(this.search);
  }
}
