import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-easy-tasks',
  templateUrl: './easy-tasks.component.html',
  styleUrls: ['./easy-tasks.component.css']
})
export class EasyTasksComponent implements OnInit {
  maxScore1:any;
  maxScore2:any;
  maxScore3:any;
  maxScore4:any;
  maxScore5:any;
  maxScore6:any;
  score:any= [];

  constructor(
    private shared : SharedService,
    private uploadService: FirebaseService,

    
    
    ) {
      this.uploadService.taskRequset('1').subscribe((res:any)=>{
        this.maxScore1 = res.maxScore;
      });
      this.uploadService.taskRequset('2').subscribe((res:any)=>{
        this.maxScore2 = res.maxScore;
      });
      this.uploadService.taskRequset('3').subscribe((res:any)=>{
        this.maxScore3 = res.maxScore;
      });
      this.uploadService.taskRequset('4').subscribe((res:any)=>{
        this.maxScore4 = res.maxScore;
      });
      this.uploadService.taskRequset('5').subscribe((res:any)=>{
        this.maxScore5 = res.maxScore;
      });
      this.uploadService.taskRequset('6').subscribe((res:any)=>{
        this.maxScore6 = res.maxScore;
      });
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
