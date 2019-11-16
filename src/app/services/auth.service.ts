import { Injectable } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './user.model';
import { auth } from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ : Observable<any>;

  constructor(private afauth: AngularFireAuth,private afs: AngularFirestore, private router : Router) {
    this.user$ = this.afauth.authState.pipe(      
      switchMap(user => {
        if(user) {
          console.log(`User logged in ${JSON.stringify(user)}`);        
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          console.log("Not logged in");
          return of(null);
        }
      })      
    )
   }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    try{
      const credentials = await this.afauth.auth.signInWithPopup(provider);
      console.log(`Checking user ${credentials.user}`);
      return this.updateUserData(credentials.user);
    }catch(e){
      console.log(`Error occured! ${e}`);
    }
  }

  async facebookSignin() {
    const provider = new auth.FacebookAuthProvider();
    try{
      const credentials = await this.afauth.auth.signInWithPopup(provider);
      console.log(credentials.user);
      return this.updateUserData(credentials.user);
    }catch(e){
      console.log(`Error occured! ${e}`);
    }
  }

  async twitterSignin() {
    const provider = new auth.TwitterAuthProvider();
    try{
      const credentials = await this.afauth.auth.signInWithPopup(provider);
      console.log(credentials.user);
      return this.updateUserData(credentials.user);
    }catch(e){
      console.log(`Error occured! ${e}`);
    }
  }


  async signOut() {
    await this.afauth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user : User){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email, 
      displayName: user.displayName,
      photoURL: user.photoURL,
      provider: user.providerId,
      last_update_date: ""+Date.now()
      
    }
    return userRef.set(data, { merge : true });
  }

}
