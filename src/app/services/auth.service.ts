import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _afAuth: AngularFireAuth
  ) { }

  login(email: string, pass: string) {
    return this._afAuth.auth.signInWithEmailAndPassword(email, pass);
  }

  logout() {
    return this._afAuth.auth.signOut();
  }
}
