import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { StoryService } from 'src/app/shared/api/story.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Story } from 'src/app/shared/models/story';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  storyId: string;
  reloadPage: false;
  page = false;
  story: Story;

  constructor(
    public storyService: StoryService,
    private route: ActivatedRoute,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.storyId = params.get('storyId');
    });
    if (this.storyService.passStory) {
      this.story = this.storyService.passStory;
      this.page = true;
    } else {
      this.storyService.getStory(this.storyId).subscribe(s => {
        this.story = s.data();
        this.page = true;
      });
    }
  }

  backwardTimeline() {
    this.navCtrl.navigateBack('main/timeline');
  }
}
