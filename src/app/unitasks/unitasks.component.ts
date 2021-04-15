import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-unitasks',
  templateUrl: './unitasks.component.html',
  styleUrls: ['./unitasks.component.css']
})
export class UnitasksComponent implements OnInit {
  score1:any;
  score2:any;
  pdfLink1 = "gs://slrc-school.appspot.com/Tasks/unitask1/SLRC2021_UniversityCategory_S1_Task.pdf";
  zipLink1 = "gs://slrc-school.appspot.com/Tasks/unitask1/SLRC2021_UniversityCategory_S1.zip";
  pdfLink2 = "";
  zipLink2 = "";

  constructor(
    public uploadService: FirebaseService
  ) { 
    
    this.uploadService.readUniOverallScore(localStorage.getItem('teamName')).subscribe((doc:any) =>{
      this.score1 = doc["one"];
      this.score2 = doc["two"];
     document.getElementById('pro1').style.width=(this.score1)+"%";
     document.getElementById('pro2').style.width=(this.score2)+"%";
});
  }

  ngOnInit(): void {
  }

}
