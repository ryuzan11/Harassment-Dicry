import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { first } from 'rxjs/operators';
import { IUser, User, Report } from '../models/i-user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  _uid: string;
  _user: IUser;
  _reports: Report[];
  _passUser: User;
  userDoc: AngularFirestoreDocument<IUser>;

  get uid(): string {
    return this._uid;
  }
  set uid(userId: string) {
    this._uid = userId;
  }

  get user(): IUser {
    return this._user;
  }
  set user(user: IUser) {
    this._user = user;
  }

  get reports(): Report[] {
    return this._reports;
  }
  set reports(reports: Report[]) {
    this._reports = reports;
  }
  set report(report: Report) {
    this._reports.push(report);
  }

  constructor(public af: AngularFirestore) {
    this.uid = this.getUserId();
    this.userInit(this.uid).then(user => {
      this.user = user;
    });
  }

  getUserId() {
    return firebase.auth().currentUser.uid;
  }

  userInit(uid: string): Promise<IUser> {
    this.userDoc = this.af.doc<IUser>('users/' + uid);
    return this.userDoc.valueChanges()
      .pipe(first())
      .toPromise(Promise);
  }

  userSet(user: IUser): Promise<void> {
    return this.userDoc.set(user);
  }

  setReport(id: string, reportType: 'story' | 'user' | 'answer', reportReason: string, sid?: string | undefined) {
    let ref: DocumentReference;
    if (reportType === 'story') {
      ref = this.af.firestore.doc('story/' + id);
    } else if (reportType === 'answer') {
      ref = this.af.firestore.doc('story/' + sid).collection('answers').doc(id);
    } else if (reportType === 'user') {
      ref = this.af.firestore.doc('users/' + id);
    }

    let report: Report;
    report = {
      reportId: id,
      reportRef: ref,
      reason: reportReason,
      type: reportType,
      created_at: firebase.firestore.Timestamp.now()
    };

    this.af.firestore.doc('users/' + this.uid)
      .update({report: firebase.firestore.FieldValue.arrayUnion(report)})
      .then(() => (
        this.upCount(ref),
        this.report = report
      ))
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
