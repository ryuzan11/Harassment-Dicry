import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { StoryService } from '../../api/story.service';
import { PrefecturesService } from '../../service/prefectures.service';
import { CategoriesService } from '../../service/categories.service';
import { Story } from '../../models/story';
import { Category } from '../../models/category';
import { HarassmentsService } from '../../service/harassments.service';

@Component({
  selector: 'app-story-post',
  templateUrl: './story-post.page.html',
  styleUrls: ['./story-post.page.scss'],
})
export class StoryPostPage implements OnInit {
  harassments: string[];
  data: {[key: string]: any};
  editMode: boolean;
  postData: Story = {
    user: {
      uid: null,
      displayName: null,
      photoDataUrl: null,
      gender: null,
    },
    type: null,
    story: null,
    prefecture: null,
    category: null,
    harassment: null,
  };

  get prefectures() {
    return this.prefecturesService.prefectures;
  }

  get categories() {
    return this.categoriesService.standardCategories;
  }

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    public storyService: StoryService,
    public categoriesService: CategoriesService,
    public harassmentsService: HarassmentsService,
    public prefecturesService: PrefecturesService
  ) { }

  ngOnInit() {
    this.editMode = this.navParams.data.preStory ? true : false;
    this.editMode ? this.postData = this.navParams.data.preStory : (
      this.postData.user.uid = this.navParams.data.uid,
      this.postData.user.displayName = this.navParams.data.user.displayName,
      this.postData.user.photoDataUrl = this.navParams.data.user.photoDataUrl,
      this.postData.user.gender = this.navParams.data.user.gender
    );
    if (this.postData.category !== null) { this.setHarassmentsFromName(this.postData.category); }
  }

  setHarassmentsFromName(name: string) {
    this.harassments = this.harassmentsService.getHarassmentsFromCategoryName(name);
  }

  resetHarassment() {
    this.postData.harassment = null;
  }

  modalDismiss(): void {
    this.modalController.dismiss();
  }

  postStory() {
    if (!this.navParams.data.user && !this.navParams.data.preStory) {
      alert('プロフィール登録が必要です');
      return;
    }
    const id = this.navParams.data.storyId;
    this.editMode ? (
      this.postData.updated_at = Date.now(),
      this.storyService.updateStory(this.postData, id)
    ) : (
      this.postData.created_at = Date.now(),
      this.storyService.addStory(this.postData)
    );
    this.modalController.dismiss();
  }

}
