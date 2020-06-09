import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from '@ionic/angular';
import { HarassmentsService } from '../../service/harassments.service';
import { Harassment } from '../../models/harassment';
import { Router, RouterEvent} from '@angular/router';
import { ListStory } from '../../models/list-story';


@Component({
  selector: 'ls-dictionary-children',
  templateUrl: './dictionary-children.component.html',
  styleUrls: ['./dictionary-children.component.scss'],
})
export class DictionaryChildrenComponent implements OnInit {
  categories: {
    'name': string;
    'harassmentId': string | undefined;
  }[] | ListStory[];
  forwardButton = true;
  listNav: boolean;

  get harassments() {
    return this.harassmentsService.harassments;
  }

  constructor(
    private navParams: NavParams,
    private router: Router,
    public harassmentsService: HarassmentsService,
    public navCtrl: NavController
  ) {
  }

  ngOnInit() {
    this.forwardButton = this.navParams.data.children[0] === null ? false : true;
    this.listNav = this.navParams.data.children[0].storyId ? true : false;
    this.categories = this.navParams.data.children;
    if (!this.listNav) {
      this.categories.forEach(v => {
        this.harassments.forEach(h => {
          if (v.name === h.name) {
            v.harassmentId = h.id;
          }
        });
      });
    }
  }

  navigateShow(id: string) {
    this.navCtrl.navigateForward('/main/dictionary/' + id);
  }

}
