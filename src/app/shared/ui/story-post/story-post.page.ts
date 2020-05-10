import { Component, OnInit, Input } from '@angular/core';
import { StoryService } from '../../api/story.service';
import { IUser } from '../../models/i-user';
import { Story } from '../../models/story';
import { IonContent, NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-story-post',
  templateUrl: './story-post.page.html',
  styleUrls: ['./story-post.page.scss'],
})
export class StoryPostPage implements OnInit {
  @Input() content: IonContent;
  @Input() uid: string;
  @Input() user: IUser;

  story = '';
  params: Story;

  constructor(
    public storyService: StoryService,
    public modalController: ModalController,
    public navParams: NavParams
  ) { }

  ngOnInit() {
  }

  modalDismiss(): void {
    this.modalController.dismiss();
  }

  postStory() {
    if (!this.user) {
      alert('プロフィール登録が必要です');
      return;
    }
    this.setParams();
    this.storyService.storyAdd(this.params);
    this.story = '';
    this.modalController.dismiss();
  }

  setParams(): void {
    this.params = {
      user: {
        uid: this.navParams.data.uid,
        displayName: this.navParams.data.user.displayName,
        photoDataUrl: this.navParams.data.user.photoDataUrl,
        gender: this.navParams.data.user.gender
      },
      story: this.story,
      prefecture: null,
      harassment: null,
      listCount: null,
      timestamp: Date.now()
    };
  }

}
