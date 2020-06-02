import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Story } from '../models/story';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  get passStory() {
    return this._passStory;
  }

  set passStory(story: Story) {
    this._passStory = story;
  }

  _passStory: Story;
  storyCollection: AngularFirestoreCollection<Story>;

  constructor(
    public af: AngularFirestore,
  ) {
    this.storyCollection = this.af.collection<Story>('story', ref => ref.where('state', '==', 'public').orderBy('created_at', 'desc'));
  }

  getStory(id: string): Observable<any> {
    return this.af.collection<Story>('story', ref => ref.where('state', '==', 'public')).doc(id).get();
  }

  addStory(story: Story) {
    return this.storyCollection.add(story);
  }

  initStory(): Observable<Story[]> {
    return this.storyCollection.valueChanges({idField: 'storyId'});
  }

  updateStory(story: Story, id: string): Promise<void> {
    return this.storyCollection.doc(id).update(story);
  }

  deleteStory(id: string): Promise<any> {
    return this.storyCollection.doc(id).delete().then(() => {
      return '削除しました';
    }).catch((error) => {
      return error;
    });
  }
}
