import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CategoryChildComponent } from '../category-child/category-child.component';
import { ActionListPage } from '../action-list/action-list.page';
import { AuthService } from 'src/app/auth/auth.service';
import { ListStory } from '../../models/list-story';

@Component({
  selector: 'ls-category-parent',
  templateUrl: './category-parent.component.html',
  styleUrls: ['./category-parent.component.scss'],
})
export class CategoryParentComponent implements OnInit {
  uid: string;
  params: {[key: string]: any};
  nextPage = CategoryChildComponent;
  listNav: boolean;

  constructor(
    private navParams: NavParams,
    private auth: AuthService,
    private modalCtrl: ModalController,
    ) { }

  ngOnInit() {
    this.uid = this.auth.getUserId();
    this.params = this.navParams.data;
  }

  async openAddList() {
    const modal = await this.modalCtrl.create({
      component: ActionListPage,
      backdropDismiss: false,
      cssClass: 'action-list-modal',
      componentProps: {
        uid: this.uid,
        type: 'add'
      }
    });
    await modal.present();
  }

  storyCount(child: ListStory[]): number {
    return (child) && (child.length !== 0)  ? child.length : 0 ;
  }


}
