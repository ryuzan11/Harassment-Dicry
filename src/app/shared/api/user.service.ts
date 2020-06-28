import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
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

  setReport(id: string, reportType: string, reportReason: string, sid?: string | undefined) {
    let ref: DocumentReference;
    if (reportType === 'story') {
      ref = this.af.firestore.doc('story/' + id);
    } else if (reportType === 'answer') {
      ref = this.af.firestore.doc('story/' + sid).collection('answers').doc(id);
    } else if (reportType === 'user') {
      ref = this.af.firestore.doc('users/' + id);
    }
    this.af.firestore.doc('users/' + this.user.uid)
      .update({
        report: firebase.firestore.FieldValue.arrayUnion({
          reportId: id,
          reportRef: ref,
          reason: reportReason,
          type: reportType,
          created_at: firebase.firestore.Timestamp.now()
        })
      })
      .then(() => this.upCount(ref))
      .catch(err => { console.error(err); }
    );
  }

  upCount(ref: DocumentReference) {
    ref.update({
      reportCount: firebase.firestore.FieldValue.increment(1),
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}
