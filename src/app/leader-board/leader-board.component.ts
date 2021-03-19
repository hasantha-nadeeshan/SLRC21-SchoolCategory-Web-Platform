import { FirebaseService } from 'src/app/services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';





 
@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.css']
})
export class LeaderBoardComponent implements OnInit {
  posts: Observable<any>;
  dataSource: Array<unknown>;

  


  constructor(
    private FirebaseService: FirebaseService,
    private afs:AngularFirestore
  ) { }

  ngOnInit(): void {
    this.posts = this.afs.collection("Marks", ref => ref.orderBy('1','desc')).valueChanges().pipe();  
  }


}
