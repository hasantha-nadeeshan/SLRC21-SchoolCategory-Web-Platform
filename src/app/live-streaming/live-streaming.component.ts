import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-live-streaming',
  templateUrl: './live-streaming.component.html',
  styleUrls: ['./live-streaming.component.css']
})
export class LiveStreamingComponent implements OnInit {
  posts: Observable<any>;
  dataSource: Array<unknown>;
  posts_length:any;
  index=1;
  currentTeam:any;
  constructor(
    private afs:AngularFirestore
  ) { }
 
  ngOnInit(): void {
    this.posts = this.afs.collection("Unimarks", ref => ref.orderBy('overall_score','desc')).valueChanges().pipe();
    this.afs.collection("competition").doc("currrentTeam").valueChanges().subscribe((result:any) => {this.currentTeam = result.name})

  }
}
