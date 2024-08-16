import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpensidebarService {
  flag=new BehaviorSubject('true');
  constructor() { }
  updateFlag(newflag: string){
    this.flag.next(newflag);
  }
}
