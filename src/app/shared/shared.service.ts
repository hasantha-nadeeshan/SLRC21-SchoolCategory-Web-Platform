import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private tasknumber = new BehaviorSubject<string>("");       //for set
  public taskNumber$ = this.tasknumber.asObservable();        //subscribing topic
  private difficulty = new BehaviorSubject<string>("");       //for set
  public difficulty$ = this.difficulty.asObservable();        //subscribing topic
  constructor() { }
  setTaskNumber(data:any){          //seting method
    this.tasknumber.next(data);     //next is important
  }
  setDifficulty(data:any){          //setting method
    this.difficulty.next(data);     //net is important
  }
}
