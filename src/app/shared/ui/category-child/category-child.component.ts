import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { HarassmentsService } from '../../service/harassments.service';
import { ListStory } from '../../models/list-story';
import { Story } from '../../models/story';


@Component({
  selector: 'ls-category-child',
  templateUrl: './category-child.component.html',
  styleUrls: ['./category-child.component.scss'],
})
export class CategoryChildComponent implements OnInit {
  categories: {
    'name': string;
    'harassmentId': string | undefined;
  }[];
  forwardButton = true;
  listStories: ListStory[];
  stories: {storyId: string, story: Story}[] = [];
  listNav: boolean;

  get harassments() {
    return this.harassmentsService.harassments;
  }

  constructor(
    private navParams: NavParams,
    public harassmentsService: HarassmentsService,
    public navCtrl: NavController
  ) {
  }

  ngOnInit() {
    this.forwardButton = this.navParams.data.children[0] === null ? false : true;
    this.listNav = this.navParams.data.children[0].storyId ? true : false;
    this.listNav ? this.listStories = this.navParams.data.children : this.categories = this.navParams.data.children;
    if (this.listNav) {
      this.listStories.forEach(l => {
        l.storyRef.get().then(s => {
          this.stories.push({storyId: l.storyId, story: s.data() as Story});
        });
      });

    } else {
      this.categories.forEach(c => {
        this.harassments.forEach(h => {
          if (c.name === h.name) {
            c.harassmentId = h.id;
          }
        });
      });
    }
  }

  navigateShow(id: string) {
    this.listNav ?
    this.navCtrl.navigateForward('/main/timeline/' + id) :
    this.navCtrl.navigateForward('/main/dictionary/' + id);
  }

}
