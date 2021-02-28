import { Component, OnInit } from '@angular/core';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  taskNumber:string;
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.taskNumber = this.shared.getTaskNumber();
  }

}
