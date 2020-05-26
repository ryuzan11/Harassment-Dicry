import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/shared/api/story.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  get passStory() {
    return this.storyService.passStory;
  }

  constructor(
    public storyService: StoryService
  ) { }

  ngOnInit() {
  }

}
