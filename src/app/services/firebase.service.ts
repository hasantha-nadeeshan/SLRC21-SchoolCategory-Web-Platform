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
import  *  as  data  from  'python_scripts/data.json';
declare var require:any;
const FileSaver = require('file-saver');

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
    private shared: SharedService,
    

  ) { 
    this.firebaseAuth.authState.subscribe(user =>{
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
        this.SetUserData(this.userData.uid);
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
        
        this.ngZone.run(() => {
        this.router.navigate(['easyTask']);
      });
      
    }).catch((error)=>{
      window.alert(error.message)
    })
    this.SetUserData(this.userData.uid);
   }

  async createUser() {
    let products = (data as any).default;
    let no = 0
    for (var val of products) {
      no++;
      let name = val["team_name"].replace(/\s/g, "").toLowerCase();
      let username = name + '@slrc.com';
      let paswwd = val["password"];
      console.log(no);
      await this.firebaseAuth.createUserWithEmailAndPassword(username, paswwd).then(result => {
          console.log(username,no);
          console.log(result.user.uid);
          this.db.collection(`Users`).doc(`${result.user.uid}`).set({
            rank: 0,
            overallScore: 0,
            teamName: val["team_name"]
          })
      });       
    }


  
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
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
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
    localStorage.removeItem('uid');
    this.router.navigate(['home']);
   // localStorage.clear();

  }
   /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user: any) {
    this.shared.setUserID(user);
    this.readData(`Users`,`${user}`).subscribe((doc: any) => {
      
      localStorage.setItem('teamName',doc.data().teamName);
    });

  }
  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  public downloadLink(link:string){
    this.storage.storage.refFromURL(link).getDownloadURL().then(url => {
      FileSaver.saveAs(url,"sfdsf.pdf");
    })
  }
  readData(collection:any,details:string){
    return this.db.collection(collection).doc(details).get();
  }
  

  readMarks(){
    return this.db.collection("Marks").valueChanges();
  }
  readOverallScore(teamName:any){
    return this.db.collection("Marks").doc(teamName).valueChanges();
  }

  taskRequset(taskName:string) {
    const fun = this.functions.httpsCallable("fireGetColors");
    return fun({taskNum:taskName});
  }

}
