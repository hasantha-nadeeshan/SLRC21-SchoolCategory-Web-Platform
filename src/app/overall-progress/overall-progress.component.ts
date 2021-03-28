import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { SharedService } from "../shared/shared.service"

@Component({
  selector: 'app-overall-progress',
  templateUrl: './overall-progress.component.html',
  styleUrls: ['./overall-progress.component.css']
})
export class OverallProgressComponent implements OnInit {
  teamName='';  
  overallScore:any;
  prec:any;
  maxTotalScore=300;
  constructor(
    public authService: FirebaseService,
  ) {
    // this.authService.readData(`Users`,localStorage.getItem('uid')).subscribe((doc: any) => {
    //   localStorage.setItem('teamName',doc.data().teamName);
    //   this.teamName = doc.data().teamName;
    // });
    this.authService.readOverallScore(localStorage.getItem('teamName')).subscribe((doc:any) =>{
      this.overallScore = doc.Overall_Score;
      document.getElementById("pro").style.width=doc.Overall_Score+"%";
    });
    this.teamName = localStorage.getItem('teamName');
    
    
  }
    
  ngOnInit(): void {
  }
  

  
  prevScrollpos = window.pageYOffset;
  pageTopPos = window.pageYOffset;
  
  scroll=window.onscroll=()=> {
    let currentScrollPos = window.pageYOffset
    if (this.pageTopPos = currentScrollPos) {
      document.getElementById("logo").style.display="none";
    } 
    else {
      document.getElementById("logo").style.display="block";
      if(currentScrollPos>0 && this.prevScrollpos>0){
        document.getElementById("logo").style.display="block";
      }
    }
    this.prevScrollpos = currentScrollPos;
  }
  launcheDate = new Date('Apr 5, 2022 12:00:00').getTime();  //deadline
  days=0;
  hours=0;
  mins=0;
  seconds=0;
  intvl = setInterval(()=>{
    //Get today date and time in mili sec
    const now = new Date().getTime();
    //Distance
    const distance= this.launcheDate-now;
    //time calculation
    this.days = Math.floor(distance/(1000*60*60*24));
    this.hours = Math.floor((distance% (1000*60*60*24))/(1000*60*60));
    this.mins =Math.floor((distance% (1000*60*60))/(1000*60));
    this.seconds = Math.floor((distance% (1000*60))/(1000));
    if(distance<0){
      clearInterval(this.intvl);
      document.getElementById("demo").innerHTML= 'Expeired';
    }
  },1000);
}
