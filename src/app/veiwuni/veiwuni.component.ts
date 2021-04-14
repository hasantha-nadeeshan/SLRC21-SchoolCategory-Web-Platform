import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-veiwuni',
  templateUrl: './veiwuni.component.html',
  styleUrls: ['./veiwuni.component.css']
})
export class VeiwuniComponent implements OnInit {
  pdfLink1 = "";
  zipLink1 = "";
  pdfLink2 = "";
  zipLink2 = "";
  constructor(
    public uploadService: FirebaseService
  ) { }

  ngOnInit(): void {
  }

}
