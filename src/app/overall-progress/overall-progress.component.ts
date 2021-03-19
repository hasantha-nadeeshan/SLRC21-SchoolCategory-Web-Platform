import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import{SharedService} from "../shared/shared.service"
@Component({
  selector: 'app-overall-progress',
  templateUrl: './overall-progress.component.html',
  styleUrls: ['./overall-progress.component.css']
})
export class OverallProgressComponent implements OnInit {
  teamName='';
  constructor(
    public authService: FirebaseService,
    private shared : SharedService
  ) { 
    this.teamName = localStorage.getItem('teamName');
  }
    
  ngOnInit(): void {
    this.probar();

  }
  value=70;

  probar(){
    document.getElementById("pro").style.width=this.value+"%";
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
}
