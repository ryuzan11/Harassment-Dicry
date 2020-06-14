import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { IUser, User } from '../models/i-user';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  _passUser: User;
  userDoc: AngularFirestoreDocument<IUser>;

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
