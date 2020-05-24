import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { StoryService } from '../../api/story.service';
import { PrefecturesService } from '../../service/prefectures.service';
import { CategoriesService } from '../../service/categories.service';
import { Story } from '../../models/story';
import { Category } from '../../models/category';
import { Harassment } from '../../models/harassment';
import { HarassmentsService } from '../../service/harassments.service';

@Component({
  selector: 'app-story-post',
  templateUrl: './story-post.page.html',
  styleUrls: ['./story-post.page.scss'],
})
export class StoryPostPage implements OnInit {
  story: string;
  prefecture: string | null;
  category: string | null;
  categories: Category[];
  harassment: string | null;
  harassments: string[];
  data: {[key: string]: any};
  params: Story;
  editMode: boolean;

  get prefectures() {
    return this.prefecturesService.prefectures;
  }

  constructor(
    public storyService: StoryService,
    public categoriesService: CategoriesService,
    public harassmentsService: HarassmentsService,
    public modalController: ModalController,
    public navParams: NavParams,
    public prefecturesService: PrefecturesService
  ) { }

  ngOnInit() {
    this.getStandardCategories();
    this.data = this.navParams.data;
    this.editMode = this.data.preStory ? true : false;
    this.story = this.editMode ? this.data.preStory.story : '';
    this.prefecture = this.editMode ? this.data.preStory.prefecture : this.data.user.prefecture;
    this.category = this.editMode ? this.data.preStory.category : '';
    this.harassment = this.editMode ? this.data.preStory.harassment : '';
    if (this.category !== '') { this.setHarassmentsFromName(this.category); }
  }

  getStandardCategories() {
    this.categories = this.categoriesService.getStandardCategories();
  }

  setHarassmentsFromName(name: string) {
    this.harassments = this.harassmentsService.getHarassmentsFromCategoryName(name);
  }

  resetHarassment() {
    this.harassment = '';
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
      prefecture: this.prefecture,
      category: this.category,
      harassment: this.harassment,
      created_at: Date.now()
    };
  }

  setEditParams(): void {
    this.params = {
      story: this.story,
      prefecture: this.prefecture,
      category: this.category,
      harassment: this.harassment,
      updated_at: Date.now(),
    };
  }

}
