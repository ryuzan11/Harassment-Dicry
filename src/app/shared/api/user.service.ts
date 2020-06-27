import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { first } from 'rxjs/operators';
import { IUser, User } from '../models/i-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  _passUser: User;
  userDoc: AngularFirestoreDocument<IUser>;

  get user() {
    return firebase.auth().currentUser;
  }

  get passUser() {
    return this._passUser;
  }
  set passUser(user: User) {
  // set passUser(user: Partial<User>) { // 使えないのか
    this._passUser = user;
  }

  constructor(public af: AngularFirestore) { }

  userInit(uid: string): Promise<IUser> {
    this.userDoc = this.af.doc<IUser>('users/' + uid);
    return this.userDoc.valueChanges()
      .pipe(first())
      .toPromise(Promise);
  }

  userSet(user: IUser): Promise<void> {
    return this.userDoc.set(user);
  }
}
