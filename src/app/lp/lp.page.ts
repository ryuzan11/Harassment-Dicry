import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseUiPage } from '../auth/firebase-ui/firebase-ui.page';

@Component({
  selector: 'app-lp',
  templateUrl: './lp.page.html',
  styleUrls: ['./lp.page.scss'],
})
export class LpPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  // async openModalAuth() {
  //   const modal = await this.modalCtrl.create({
  //     component: FirebaseUiPage
  //   });
  //   return await modal.present();
  // }

}
