import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { User } from '../shared/services/user';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../models/file-upload.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/functions';
import { SharedService } from '../shared/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private basePath = '/Submission';
  userData: any;
  //uid = '';
  teamName = '';
  
  

  constructor(
    public firebaseAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private db: AngularFirestore,
    private storage: AngularFireStorage,
    private functions: AngularFireFunctions,
    private shared : SharedService
    

  ) { 
    this.firebaseAuth.authState.subscribe(user =>{
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        this.SetUserData(this.userData);
      }else{
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
    
   }
   async SignIn(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
      .then(result => {
        this.userData = result.user;
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('uid',this.userData.uid);
        this.SetUserData(result.user);
        this.ngZone.run(() => {
        this.router.navigate(['easyTask']);
      });
      
    }).catch((error)=>{
      window.alert(error.message)
    })
   }
  pushFileToStorage(fileUpload: FileUpload, task: string): Observable<number> {
    const filePath = `${this.basePath}/${this.userData.uid}/${task}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    this.shared.teamName$.subscribe(x => this.teamName = x);
    //console.log(this.teamName);
     let metadata = {
       uid: this.userData.uid,
       team: this.teamName,
       task: task
    };
     const uploadTask = storageRef.put(fileUpload.file, { customMetadata: metadata });
    
    //const uploadTask = this.storage.upload(filePath, fileUpload.file);
     
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          //this.shared.userId$.subscribe(x => this.uid = x);
          //this.readData(this.uid,)
          //this.saveFileData(fileUpload,task);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
   }
  
   private saveFileData(fileUpload: FileUpload,task: string){
     return this.db.collection(`Submissions`).doc(`${this.userData.uid}`).set({
       task: "cat"
      
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  routeGuard() {
    this.firebaseAuth.authState.subscribe(user => {
      if(!user){
        //this.router.navigate([id]);
        return true
      }
      return false;
       
     })
  }

  SignOut(){
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['home']);

  }
   /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    this.shared.setUserID(user.uid);
    this.readData(`Users`,`${user.uid}`).subscribe((doc: any) => {
      this.shared.setTeamName(doc.data().name);
      
      localStorage.setItem('teamName',doc.data().name);
    });
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }
  }
  readData(collection:any,details:string){
    return this.db.collection(collection).doc(details).get();
  }

  taskRequset(taskName:string) {
    let result;
    const fun = this.functions.httpsCallable("fireGetColors");
   // console.log(fun({}));
    return fun({taskNum:taskName});

  }

  public downloadLink() {
    this.storage.storage.refFromURL('gs://slrc-school.appspot.com/Submission/Bymhw8vttmaidBhc7tIo5GP66Tc2/easy/clique wording-2.png').getDownloadURL().then(url => {
      console.log(url);
    })
  }
}
