import { Component, OnInit } from '@angular/core';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-easy-tasks',
  templateUrl: './easy-tasks.component.html',
  styleUrls: ['./easy-tasks.component.css']
})
export class EasyTasksComponent implements OnInit {
  constructor(private shared : SharedService) { }
  
  ngOnInit(): void {
  }
  
  onClickMe(tasknum: any,difficulty:any) {
  this.shared.setTaskNumber(tasknum);
  this.shared.setDifficulty(difficulty);
  }
  
}
