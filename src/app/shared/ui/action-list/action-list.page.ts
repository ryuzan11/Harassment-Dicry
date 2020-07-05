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
  listId: string;
  type: 'private' = 'private';
  typeAdd: boolean;
  name: '';

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.uid = this.navParams.data.uid;
    this.listId = this.navParams.data.listId;
    this.typeAdd = this.navParams.data.modalType === 'add' ? true : false;
    if (!this.typeAdd) { this.name = this.navParams.data.listName; }
  }

  modalDismiss(): void {
    this.modalCtrl.dismiss(this.name);
  }

  createList() {
    this.listService.addList(this.uid, this.name, this.type).then(() => {
      this.modalDismiss();
    })
    .catch((err) => {
      console.error(err);
    });
  }

  editList() {
    this.listService.setList(this.uid, this.name, this.listId).then(() => {
      this.modalDismiss();
    })
    .catch((err) => {
      console.error(err);
    });
  }

}
