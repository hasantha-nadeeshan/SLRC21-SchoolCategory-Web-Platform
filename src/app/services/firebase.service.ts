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
import { promise } from 'selenium-webdriver';


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
        localStorage.setItem('uid', this.userData.uid);
        this.SetUserData(this.userData.uid).then(result => {
          this.ngZone.run(() => {
            this.router.navigate(['easyTask']);
          });
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
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
   }
  
 

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  get routeGuard():boolean {
    this.firebaseAuth.authState.subscribe(user => {
      if(!user){
        this.router.navigate(['home']);
      }
      else{
      }
     });
     return true;
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
    return new Promise((resolve, reject) => {
      this.readData(`Users`,`${user}`).subscribe((doc: any) => {
        localStorage.setItem('teamName', doc.data().teamName);
        resolve('easyTask')
      });
    });
  }

  downloadPdf(pdfUrl: string, pdfName: string ) {
    FileSaver.saveAs(pdfUrl, pdfName);
  }

  public downloadLink(link:string){
    this.storage.storage.refFromURL(link).getDownloadURL().then(url => {
      FileSaver.saveAs(url);
    })
  }
  
  public getImgDownloadLink(link:string){
    return new Promise((resolve, reject) => {
      this.storage.storage.refFromURL(link).getDownloadURL().then(url => {
        console.log(url,"fr");
      resolve(url);
      });
    });
  }
  readData(collection:any,details:string){
    return this.db.collection(collection).doc(details).get();
  }
  readTeam(collection:any,details:string){
    return this.db.collection(collection).doc(details).valueChanges();
  }
  readTime(collection:any,details:string){
    return this.db.collection(collection).doc(details).valueChanges();
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
