import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-veiw-task',
  templateUrl: './veiw-task.component.html',
  styleUrls: ['./veiw-task.component.css']
})
export class VeiwTaskComponent implements OnInit {
  maxScore:any=[];
  tasks = ['1','2','3','4','5','6'];
  description:any=[];
  pdfLink:any=[];
  zipLink:any=[];
  imgLink:any=[];
 
  constructor(
    public uploadService: FirebaseService
  ) {
      for (let i = 0; i <6; i++) {
          this.uploadService.taskRequset(this.tasks[i]).subscribe((res:any)=>{
            this.description[i] = res.description;
            this.maxScore[i] = res.maxScore;
            this.pdfLink[i] = res.linkpdf;
            this.zipLink[i] = res.linkzip;
            this.imgLink[i] = res.linkimg;
            this.uploadService.getImgDownloadLink(this.imgLink).then(data=>{
              this.imgLink[i]= data;
            });
          });
      }
    }
   
  

  ngOnInit(): void {
  }

}  

