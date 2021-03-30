import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../models/file-upload.model';
import { FirebaseService } from '../services/firebase.service';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: FileUpload;
  percentage: number;
  attempt:any;
  taskNumber = '';
  sub1Time:any;
  sub2Time:any;
  rulesLink:any;

  constructor(
    public uploadService: FirebaseService
    
  ) {
    this.taskNumber = localStorage.getItem('taskno');
    this.uploadService.taskRequset(this.taskNumber).subscribe((res:any)=>{
      this.rulesLink = res.rules_link;
  });
    this.uploadService.readData(`Users/${localStorage.getItem('uid')}/Submission`,this.taskNumber).subscribe((doc:any)=>{
      if(!doc.exists){
        this.attempt = 2;
        this.sub1Time="Not Submitted";
        this.sub2Time="Not Submitted";
      }
      else{
        this.attempt = 2-doc.data().attempt;
        this.sub1Time = new Date(doc.data().time);
        this.sub2Time=doc.data().time2;
        this.sub2Time = new Date(doc.data().time2);
      }
      
    });
    }

  ngOnInit(): void {
  }
  


  selectFile(event:any): void {
    this.selectedFiles = event.target.files;
  }
upload():void{
    if(this.attempt>0){
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file);
  
    //this.uploadService.upload();
   
    this.uploadService.pushFileToStorage(this.currentFileUpload,this.taskNumber).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
      
    );
    this.attempt = this.attempt-1;
    }
    else{
      alert("You have submitted maximum Submissions")
    }
  }



}
