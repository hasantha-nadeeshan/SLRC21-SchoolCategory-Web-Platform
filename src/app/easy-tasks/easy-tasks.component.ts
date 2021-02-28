import { Component, OnInit } from '@angular/core';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-easy-tasks',
  templateUrl: './easy-tasks.component.html',
  styleUrls: ['./easy-tasks.component.css']
})
export class EasyTasksComponent implements OnInit {

  constructor(private shared : SharedService) { }
  taskNumber = "task1";
  ngOnInit(): void {
    this.shared.setTaskNumber(this.taskNumber);
  }

}
