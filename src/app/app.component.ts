import { Component,OnInit} from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SLRC21-SchoolCategory-Web-Platform';
  path:string
  ngOnInit(){
    AOS.init();
  }
  
}
