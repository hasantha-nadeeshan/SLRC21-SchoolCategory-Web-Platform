import { Component, OnInit } from '@angular/core';
import{SharedService} from "../shared/shared.service"
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.css']
})
export class TaskPageComponent implements OnInit {
  difficulty='';
  taskNumber=''; 
  description='';
  maxScore = '';
  
  incomingData={};     //variable
  constructor(
    private shared:SharedService,
    private uploadService: FirebaseService,) {
      
    this.difficulty=localStorage.getItem('difficulty');      //variable
    this.taskNumber=localStorage.getItem('taskno');
   
    this.uploadService.taskRequset(this.taskNumber).subscribe((res:any)=>{
        this.description = res.description;
        this.maxScore = res.maxScore;
    });
    console.log(this.incomingData);
   }   //private constructor to use in this file

  ngOnInit(): void {
   }
  
  
          
  
}
