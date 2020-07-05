import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { List } from '../models/list';
import { IUser } from '../models/i-user';
import { ListStory } from '../models/list-story';
import { StoryService } from './story.service';


@Injectable({
  providedIn: 'root'
})
export class ListService {
  listCollection: AngularFirestoreCollection<List>;
  batch = this.af.firestore.batch();
  list: List;

  constructor(
    private af: AngularFirestore,
    private storyService: StoryService
  ) {}

  getLists(uid: string): Observable<List[]> {
    return this.af.doc<IUser>('users/' + uid).collection<List>('listStories', ref => ref.orderBy('created_at', 'desc'))
      .valueChanges({idField: 'listId'});
  }

  addList(uid: string, listName: string, listType: 'public' | 'private'): Promise<DocumentReference> {
    this.list = {
      name: listName,
      type: listType,
      children: null,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    };
    return this.af.doc<IUser>('users/' + uid).collection<List>('listStories').add(this.list);
  }

  setList(uid: string, listName: string, lid: string): Promise<void> {
    return this.af.doc<IUser>('users/' + uid).collection<List>('listStories').doc(lid).set({
      name: listName,
      update_at: firebase.firestore.FieldValue.serverTimestamp()
    }, {merge: true});
  }

  updateList(uid: string, sid: string, listId: string) {
    const sRef = this.af.firestore.doc('story/' + sid);
    this.af.firestore.doc('users/' + uid).collection('listStories').doc(listId).update({
      children: firebase.firestore.FieldValue.arrayUnion({
        storyId: sid,
        storyRef: sRef,
        created_at: firebase.firestore.Timestamp.now()
      })
    });
  }

  deleteListStory(uid: string, lInfo: {[key: string]: string | ListStory}) {
    firebase.firestore().doc('users/' + uid).collection('listStories').doc(lInfo.listId as string).update({ // this.af.firestore
      children: firebase.firestore.FieldValue.arrayRemove(lInfo.storyInfo)
    });
  }

  deleteList(uid: string, lid: string, children?: ListStory[]) {
    if (children) {
      children.forEach(child => {
        this.storyService.downCount(child.storyId);
      });
    }
    this.af.doc('users/' + uid).collection('listStories').doc(lid).delete();
  }

}
