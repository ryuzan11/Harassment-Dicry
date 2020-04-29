import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from '../../shared/ui/profile/profile.page';
import { Prefecture } from '../../shared/models/prefecture';
import { PrefecturesService } from 'src/app/shared/service/prefectures.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {
  prefectures: Prefecture[];

  constructor(
    private prefecturesService: PrefecturesService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.getPrefectures();
  }

  getPrefectures(): void {
    this.prefectures = this.prefecturesService.getPrefectures();
  }

  async presentModal() {
    console.log('aaa');
    const modal =  await this.modalController.create({
      component: ProfilePage
    });
    return await modal.present();
  }

  aaa() {
    console.log('aaa');
  }

}
