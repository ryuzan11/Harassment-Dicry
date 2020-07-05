import { DocumentReference } from '@angular/fire/firestore/interfaces';
import * as firebase from 'firebase/app';

export interface IUser {
  displayName: string;
  photoDataUrl: string;
  prefecture?: string;
  age: string;
  gender: '男性' | '女性' | 'その他' | '無回答';
  profile: string;
  report: Report[];
  reportCount: number;
  updated_at?: firebase.firestore.FieldValue;
}

export interface User {
  uid: string;
  displayName: string;
  photoDataUrl: string;
  age: string;
  prefecture?: string;
  gender: '男性' | '女性' | 'その他' | '無回答';
}

export interface Report {
  reportId: string;
  reportRef?: DocumentReference;
  reason: string;
  type: 'story' | 'user' | 'answer';
  created_at?: firebase.firestore.FieldValue;
}
