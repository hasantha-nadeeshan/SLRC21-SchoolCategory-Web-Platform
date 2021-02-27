import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  launcheDate = new Date('Feb 26, 2021 00:00:00').getTime();
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
  prevScrollpos = window.pageYOffset;
scroll=window.onscroll=()=> {
  let currentScrollPos = window.pageYOffset;
  if (this.prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-container").style.top = "0";
  } else {
    if(currentScrollPos>0 && this.prevScrollpos>0){
      document.getElementById("navbar-container").style.top = "-70px";
    }
  }
  this.prevScrollpos = currentScrollPos;
}

}
