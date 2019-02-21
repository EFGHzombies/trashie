import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<firebase.User>;
  public user_name: string;
  public user_email: string;
  
  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }

  register(email, password): Observable<any> {
    return from(
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    )
  }

  login(email, password): Observable<any> {
    return from(
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
    )
  }

  isAuthenticated(): Observable<any> {
    return this.user.pipe(map(user => user && user.uid !== undefined));
  }

  userInfo() {
    this.afAuth.authState.subscribe(auth => { 
      this.user_email = auth.email;
    })
      return this.user_email;
  }

  isLoggedIn() {
    var fireUser = firebase.auth().currentUser;
    if(fireUser != null){
      return true;
    } else {
      return false;
    }
  }


  logout() {
    this.afAuth.auth.signOut();
  }
}