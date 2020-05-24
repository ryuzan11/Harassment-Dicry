import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../api/story.service';
import { Story } from '../../models/story';
import { NavParams, ModalController } from '@ionic/angular';
import { PrefecturesService } from '../../service/prefectures.service';

@Component({
  selector: 'app-story-post',
  templateUrl: './story-post.page.html',
  styleUrls: ['./story-post.page.scss'],
})
export class StoryPostPage implements OnInit {

  story = '';
  data: {[key: string]: any};
  params: Story;
  editMode: boolean;

  constructor(
    public storyService: StoryService,
    public modalController: ModalController,
    public navParams: NavParams,
    public prefecturesService: PrefecturesService
  ) { }

  ngOnInit() {
    this.data = this.navParams.data;
    this.editMode = this.navParams.data.preStory ? true : false;
  }

  modalDismiss(): void {
    this.modalController.dismiss();
  }

  postStory() {
    if (!this.data.user && !this.data.preStory) {
      alert('プロフィール登録が必要です');
      return;
    }
    const id = this.data.storyId;
    this.editMode ? this.setEditParams() : this.setParams();
    this.editMode ? this.storyService.storyUpdate(this.params, id) : this.storyService.storyAdd(this.params);
    this.story = '';
    this.modalController.dismiss();
  }

  setParams(): void {
    this.params = {
      user: {
        uid: this.data.uid,
        displayName: this.data.user.displayName,
        photoDataUrl: this.data.user.photoDataUrl,
        gender: this.data.user.gender
      },
      story: this.story,
      prefecture: null,
      harassment: null,
      listCount: null,
      created_at: Date.now()
    };
  }

  setEditParams(): void {
    this.params = {
      user: {
        uid: this.data.preStory.user.uid,
        displayName: this.data.preStory.user.displayName,
        photoDataUrl: this.data.preStory.user.photoDataUrl,
        gender: this.data.preStory.user.gender
      },
      story: this.data.preStory.story,
      prefecture: null,
      harassment: null,
      listCount: null,
      created_at: this.data.preStory.created_at,
      updated_at: Date.now(),
    };
  }

}
