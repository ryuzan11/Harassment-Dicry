import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { User } from './i-user';

export interface Story {
  type: '相談' | '解決済み' | '閲覧のみ';
  state: 'public' | 'private';
  story: string;
  prefecture: string;
  category: string;
  harassment: string;
  listCount?: number;
  bestAnswer?: {
    answerId: string;
    answer: string;
    answerUser: User;
    created_at: firebase.firestore.FieldValue;
  };
  deadline?: number;
  created_at?: firebase.firestore.FieldValue;
  updated_at?: firebase.firestore.FieldValue;
  user: User;
}

export interface Answer {
  answer: string;
  storyId: string;
  story: string;
  user: User;
  created_at: firebase.firestore.FieldValue;
  updated_at?: firebase.firestore.FieldValue;
}
