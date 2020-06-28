import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Answer, Story } from '../models/story';
import { User } from '../models/i-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(
    public af: AngularFirestore,
  ) { }

  getAnswers(sid: string): Observable<Answer[]> {
    return this.af.doc<Story>('story/' + sid).collection<Answer>('answers', ref => ref.orderBy('created_at', 'desc'))
      .valueChanges({idField: 'answerId'});
  }

  getUserAnswers(uid: string): Observable<Answer[]> {
    return this.af.collectionGroup<Answer>('answers', ref => ref.where('user.uid', '==', uid).orderBy('created_at', 'desc')).valueChanges();
  }

  addAnswer(sid: string, addUser: User, addAnswer: string, addStory: string) {
    const answer: Answer = {
      answer: addAnswer,
      storyId: sid,
      story: addStory,
      user: addUser,
      reportCount: 0,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    };
    this.af.doc<Story>('story/' + sid).collection<Answer>('answers').add(answer).catch(error => {
      console.error(error);
    });
  }

  updateAnswer(sid: string, aid: string, value: string) {
    this.af.doc<Story>('story/' + sid).collection<Answer>('answers').doc(aid).update({
      answer: value,
      updated_at: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(error => {
      console.error(error);
      });
  }

  async deleteAnswer(sid: string, aid: string): Promise<string> {
    return this.af.doc<Story>('story/' + sid).collection<Answer>('answers').doc(aid).delete().then(() => {
      return '削除しました';
    }).catch((error: string) => {
      return error;
    });
  }
}
