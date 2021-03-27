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
  posts_length:any;
  index=1;
  taskNum:any;

  constructor(
    private FirebaseService: FirebaseService,
    private afs:AngularFirestore
  ) {
    this.taskNum = localStorage.getItem('taskno');
   }

  ngOnInit(): void {
    this.posts = this.afs.collection("Marks", ref => ref.orderBy(`${this.taskNum}`,'desc')).valueChanges().pipe(); 
     
  }

}
