import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private subject = new Subject<any>();

  sendDestUrlEvent(destUrl:string) {
    //console.log(destUrl)
    this.subject.next(destUrl);
  }
  getDestUrlEvent(): Observable<any>{
    return this.subject.asObservable();
  }
  constructor() { }
}
