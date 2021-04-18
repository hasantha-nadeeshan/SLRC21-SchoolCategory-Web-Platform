import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-easy-tasks',
  templateUrl: './easy-tasks.component.html',
  styleUrls: ['./easy-tasks.component.css']
})
export class EasyTasksComponent implements OnInit {
  maxScore:any=[];
  score:any= [];
  prec:any=[];
  tasks = ['1','2','3','4','5','6'];
 

  constructor(
    private uploadService: FirebaseService
    ) {
      for (let i = 0; i <3; i++) {
        this.uploadService.taskRequset(this.tasks[i]).subscribe((res:any)=>{
          this.maxScore[i]=res.maxScore;
          
        
          this.uploadService.readOverallScore(localStorage.getItem('teamName')).subscribe((doc:any) =>{
            this.score[i] = ((doc[i + 1]*100)/this.maxScore[i]);
            document.getElementById(`pro${i+1}`).style.width=this.score[i]+"%"; 
      });
        });

      }
   
     }   //private constructir to use in this file
  
  ngOnInit(): void {
    
    
  }
  
  onClickMe(tasknum: any,difficulty:any) {
 // this.shared.setTaskNumber(tasknum);           //set tasknumber to global
  localStorage.setItem('taskno', tasknum);        //set difficulty level to global
  localStorage.setItem('difficulty',difficulty);
    
  }

  

  
  
}
