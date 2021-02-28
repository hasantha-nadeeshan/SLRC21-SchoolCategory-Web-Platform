import { Component, OnInit } from '@angular/core';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  difficulty='';      //variable
  taskNumber='';      //variable
  
  constructor(private shared:SharedService) { }   //private constructor to use in this file

  ngOnInit(): void {
    this.shared.taskNumber$.subscribe(x=> this.taskNumber=x);       //subscribe to relavant topic which are set in shared.ts
    this.shared.difficulty$.subscribe(y=> this.difficulty=y);       //subscribing to relavant topic ehich are set in shared.ts
  }

}
