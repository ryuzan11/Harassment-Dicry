import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateListPage } from '../../shared/ui/create-list/create-list.page';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  async openCreateList() {
    const modal = await this.modalCtrl.create({
      component: CreateListPage,
      backdropDismiss: false,
      cssClass: 'create-list-modal',
      componentProps: {
        uid: this.auth.getUserId()
      }
    });
    await modal.present();
  }

}
