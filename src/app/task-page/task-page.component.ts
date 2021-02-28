import { Component, OnInit } from '@angular/core';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  difficulty='';
  taskNumber='';
  
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.taskNumber$.subscribe(x=> this.taskNumber=x);
    this.shared.difficulty$.subscribe(y=> this.difficulty=y);
  }

}
