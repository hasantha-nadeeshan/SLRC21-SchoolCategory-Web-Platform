import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: FirebaseService
  ) {}

  ngOnInit(): void {
  }
  prevScrollpos = window.pageYOffset;
  pageTopPos = window.pageYOffset;
  
  scroll=window.onscroll=()=> {
    let currentScrollPos = window.pageYOffset
    if (this.pageTopPos = currentScrollPos) {
      document.getElementById("navbar-container").style.backgroundColor="rgba(0,0,0,0.4)";
      document.getElementById("navbrand").style.display="block";
    
     //document.getElementById("navbar-container").style.top = "0";
    } 
    else {
      document.getElementById("navbar-container").style.backgroundColor="rgba(0,0,0,0.1)";
      document.getElementById("navbrand").style.display="none";
      if(currentScrollPos>0 && this.prevScrollpos>0){
        document.getElementById("navbar-container").style.backgroundColor="rgba(0,0,0,0.1)";
        document.getElementById("navbrand").style.display="none";
        //document.getElementById("navbar-container").style.top = "-70px";
    }
  }
  this.prevScrollpos = currentScrollPos;
}
}
