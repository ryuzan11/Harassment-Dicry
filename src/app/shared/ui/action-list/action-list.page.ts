import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ListService } from '../../api/list.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.page.html',
  styleUrls: ['./action-list.page.scss'],
})
export class ActionListPage implements OnInit {
  uid: string;
  type: string;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.uid = this.navParams.data.uid;
    this.type = 'private';
  }

  modalDismiss(): void {
    this.modalCtrl.dismiss();
  }

  actionList(name: string, type: 'public' | 'private') {
    this.listService.addList(this.uid, name, type);
    this.modalDismiss();
  }

}
