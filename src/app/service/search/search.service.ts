import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  search=new BehaviorSubject('');
  constructor() { }
  updateSearch(search: string){
    this.search.next(search);
  }
}
