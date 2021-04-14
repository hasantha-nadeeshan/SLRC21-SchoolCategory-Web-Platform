import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './../services/firebase.service';


@Component({
  selector: 'app-sign-in-uni',
  templateUrl: './sign-in-uni.component.html',
  styleUrls: ['./sign-in-uni.component.css']
})
export class SignInUniComponent implements OnInit {

  constructor(
    public authService: FirebaseService
  ) { }

  ngOnInit(): void {
  }

}
