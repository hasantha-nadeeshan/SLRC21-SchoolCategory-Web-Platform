import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-overall-leaderboard',
  templateUrl: './overall-leaderboard.component.html',
  styleUrls: ['./overall-leaderboard.component.css']
})
export class OverallLeaderboardComponent implements OnInit {
  posts: Observable<any>;
  dataSource: Array<unknown>;
  posts_length:any;
  index=1;
  constructor(
    private FirebaseService: FirebaseService,
    private afs:AngularFirestore
  ) {
    
   }

  ngOnInit(): void {
    this.posts = this.afs.collection("Marks", ref => ref.orderBy('Overall_Score','desc')).valueChanges().pipe(); 
     
  }


}
