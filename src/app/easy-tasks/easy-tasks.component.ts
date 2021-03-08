import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-easy-tasks',
  templateUrl: './easy-tasks.component.html',
  styleUrls: ['./easy-tasks.component.css']
})
export class EasyTasksComponent implements OnInit {
  constructor(
    private shared : SharedService,
    public authService: FirebaseService
    ) { }   //private constructir to use in this file
  
  ngOnInit(): void {
  }
  
  onClickMe(tasknum: any,difficulty:any) {
  this.shared.setTaskNumber(tasknum);           //set tasknumber to global
  this.shared.setDifficulty(difficulty);        //set difficulty level to global
  }
  
}
