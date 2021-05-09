import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-uni-leaderboard',
  templateUrl: './uni-leaderboard.component.html',
  styleUrls: ['./uni-leaderboard.component.css']
})
export class UniLeaderboardComponent implements OnInit {
  posts: Observable<any>;
  dataSource: Array<unknown>;
  posts_length:any;
  index=1;
  constructor(
    private afs:AngularFirestore
  ) { }

  ngOnInit(): void {
    this.posts = this.afs.collection("Unimarks", ref => ref.orderBy('overall_score','desc')).valueChanges().pipe(); 
  }

}
