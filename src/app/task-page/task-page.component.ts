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
  currentScore= '';
  pdfLink:any;
  zipLink:any;
  imgLink:any;
  image="https://firebasestorage.googleapis.com/v0/b/slrc-school.appspot.com/o/Tasks%2F1%2FDid%20you%20know%204.png?alt=media&token=fa7b73a7-4989-4b2c-bb9f-818e9c563707";
  
  incomingData={};     //variable
  constructor(
  
    public uploadService: FirebaseService) {
      
    this.difficulty=localStorage.getItem('difficulty');      //variable
    this.taskNumber=localStorage.getItem('taskno');
   

    this.uploadService.taskRequset(this.taskNumber).subscribe((res:any)=>{
        this.description = res.description;
        this.maxScore = res.maxScore;
        this.pdfLink = res.linkpdf;
        this.zipLink = res.linkzip;
       this.imgLink = res.linkimg;
       this.uploadService.getImgDownloadLink(this.imgLink).then(data=>{
          this.imgLink= data;
       });
       
    
    });
    this.uploadService.readData(`Users`,localStorage.getItem('uid')).subscribe((doc: any) => {
      localStorage.setItem('teamName',doc.data().teamName);
      this.uploadService.readOverallScore(localStorage.getItem('teamName')).subscribe((doc:any) =>{
          this.currentScore = doc[this.taskNumber];
      });
    });
   
    
   }   //private constructor to use in this file

  ngOnInit(): void {
  
    //document.querySelector('img').src=this.imgLink;
   }
  
   
          
  
}
