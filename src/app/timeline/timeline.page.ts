import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { ProfilePage } from '../shared/profile/profile.page';

@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.page.html',
  styleUrls: ['timeline.page.scss']
})
export class TimelinePage implements OnInit {

  constructor(public modalController: ModalController) {}

  async ngOnInit() {
    const modal = await this.modalController.create({
      component: ProfilePage
    });
    await modal.present();
  }

  localNotification(): void {
    Plugins.LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'ようこそ',
          body: 'Ionic Frameworkへ',
          schedule: {at: new Date(Date.now() + 1000 * 5)}
        }
      ]
    });
  }

}
