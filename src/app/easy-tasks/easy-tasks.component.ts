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
  tasks = ['1','2','3','4','5','6']

  constructor(
    private shared : SharedService,
    private uploadService: FirebaseService,

    
    
    ) {
      for (let i = 0; i <6; i++) {
        this.uploadService.taskRequset(this.tasks[1]).subscribe((res:any)=>{
          this.maxScore[i]=res.maxScore;
        });
      }
      this.uploadService.readOverallScore(localStorage.getItem('teamName')).subscribe((doc:any) =>{
        for (let i = 0; i < 6; i++) {
          this.score[i] = doc[i + 1];
          document.getElementById(`pro${i+1}`).style.width=doc[i + 1]+"%";
        } 
        // document.getElementById("pro1").style.width=this.score[0]+"%";
        // document.getElementById("pro2").style.width=this.score[1]+"%";
        // document.getElementById("pro3").style.width=this.score[2]+"%";
        // document.getElementById("pro4").style.width=this.score[3]+"%";
        // document.getElementById("pro5").style.width=this.score[4]+"%";
        // document.getElementById("pro6").style.width=this.score[5]+"%";
        
    });

     }   //private constructir to use in this file
  
  ngOnInit(): void {

    
  }
  
  onClickMe(tasknum: any,difficulty:any) {
 // this.shared.setTaskNumber(tasknum);           //set tasknumber to global
  localStorage.setItem('taskno', tasknum);        //set difficulty level to global
  localStorage.setItem('difficulty',difficulty);
    
  }

  

  
  
}
