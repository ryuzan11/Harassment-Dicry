import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { List } from '../models/list';
import { IUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  listCollection: AngularFirestoreCollection<List>;
  batch = this.af.firestore.batch();
  list: List;

  constructor(
    private af: AngularFirestore
  ) {}

  addList(uid: string, listName: string) {
    this.list = {
      name: listName,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    };
    this.af.doc<IUser>('users/' + uid).collection('listStories').add(this.list);
  }

}
