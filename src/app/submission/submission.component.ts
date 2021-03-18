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
  constructor(
    private uploadService: FirebaseService,
    private shared:SharedService
  ) { }

  ngOnInit(): void {
  }
  taskNumber = '';


  selectFile(event:any): void {
    this.selectedFiles = event.target.files;
  }
  upload(): void {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    this.currentFileUpload = new FileUpload(file);
  
    //this.uploadService.upload();
    this.taskNumber = localStorage.getItem('taskno')
    this.uploadService.pushFileToStorage(this.currentFileUpload,this.taskNumber).subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }



}
