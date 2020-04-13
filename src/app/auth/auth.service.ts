import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { NavController, AlertController } from '@ionic/angular';
import { firebaseError } from './firebase.error';
import { List } from '../shared/models/List';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public navController: NavController,
    public alertController: AlertController
  ) { }

  getUserId(): string {
    return firebase.auth().currentUser.uid;
  }

  authSignUp(login: {email: string, password: string}): Promise<boolean> {
    return firebase.auth()
      .createUserWithEmailAndPassword(login.email, login.password)
      .then(() => this.navController.navigateForward('/'))
      .catch(async error => {
        this.alertError(error);
        throw error;
      });
  }

  authSignIn(login: {email: string, password: string}): Promise<boolean> {
    return firebase.auth()
      .signInWithEmailAndPassword(login.email, login.password)
      .then(() => this.navController.navigateForward('/'))
      .catch(async error => {
        this.alertError(error);
        throw error;
      });
  }

  authSignOut(): Promise<boolean> {
    return firebase.auth()
      .signOut()
      .then(() => this.navController.navigateForward('/auth/signin'))
      .catch(error => {
        throw error;
      });
  }

  async alertError(e: List<string>): Promise<void> {
    if (firebaseError.hasOwnProperty(e.code)) {
      e = firebaseError[e.code];
    }
    const alert = await this.alertController.create({
      header: e.code,
      message: e.message,
      buttons: ['閉じる']
    });
    await alert.present();
  }
}
