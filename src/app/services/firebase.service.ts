import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { User } from '../shared/services/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  userData: any;

  constructor(
    public firebaseAuth : AngularFireAuth,
    public router: Router,
    public ngZone: NgZone

  ) { 
    this.firebaseAuth.authState.subscribe(user =>{
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
   }
   async SignIn(email:string,password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(result=>{

      localStorage.setItem('user',JSON.stringify(result.user));
      this.SetUserData(result.user);
      this.ngZone.run(() => {
        this.router.navigate(['easyTask']);
      });
      
    }).catch((error)=>{
      window.alert(error.message)
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }

  async routeGuard(id:any){
    this.firebaseAuth.authState.subscribe(user =>{
      if(!user){
        this.router.navigate([id]);
      }
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
  SetUserData(user:any) {
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
    }
    // return this.afs.doc(`users/${user.uid}`).set({
    //   uid: user.uid,
    //   email: user.email,
    //   displayName: user.displayName,
    // })
  }

}
