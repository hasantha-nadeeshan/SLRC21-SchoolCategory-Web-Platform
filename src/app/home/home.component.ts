import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  scrollWindow(){
    window.scroll(0,676/2); 
  }
  ngOnInit() {
this.scrollWindow();
    
  }
  displayLogIN():void{
    document.getElementById("logincomponent").style.display="block";
  }
  launcheDate = new Date().getTime();  //deadline
  days=0;
  hours=0;
  mins=0;
  seconds=0;
  /*intvl = setInterval(()=>{
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
*/
 

  
}
function scrollWindow() {
  throw new Error('Function not implemented.');
}

