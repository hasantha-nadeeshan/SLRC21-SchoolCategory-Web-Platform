import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private tasknumber = new BehaviorSubject<string>("");
  public taskNumber$ = this.tasknumber.asObservable();
  private difficulty = new BehaviorSubject<string>("");
  public difficulty$ = this.difficulty.asObservable();
  constructor() { }
  setTaskNumber(data:any){
    this.tasknumber.next(data);
  }
  setDifficulty(data:any){
    this.difficulty.next(data);
  }
}
