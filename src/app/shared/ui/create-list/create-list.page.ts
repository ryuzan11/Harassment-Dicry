import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ListService } from '../../api/list.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.page.html',
  styleUrls: ['./create-list.page.scss'],
})
export class CreateListPage implements OnInit {
  uid: string;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.uid = this.navParams.data.uid;
  }

  modalDismiss(): void {
    this.modalCtrl.dismiss();
  }

  createList(name: string) {
    this.listService.addList(this.uid, name);
    this.modalDismiss();
  }

}
