import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-veiwuni',
  templateUrl: './veiwuni.component.html',
  styleUrls: ['./veiwuni.component.css']
})
export class VeiwuniComponent implements OnInit {
  pdfLink1 = "gs://slrc-school.appspot.com/Tasks/unitask1/SLRC2021_UniversityCategory_S1_Task.pdf";
  zipLink1 = "gs://slrc-school.appspot.com/Tasks/unitask1/SLRC2021_UniversityCategory_S1.zip";
  pdfLink2 = "";
  zipLink2 = "";

  constructor(
    public uploadService: FirebaseService
  ) { }

  ngOnInit(): void {
  }

}
