import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  taskNumber:string
  constructor() { }
  setTaskNumber(data: string){
    this.taskNumber = data;
  }
  getTaskNumber(){
    return this.taskNumber;
  }
}
