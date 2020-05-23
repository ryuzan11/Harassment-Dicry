import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../auth/auth.service';
import { FirestoreService } from '../../shared/api/firestore.service';
import { ProfilePage } from '../../shared/ui/profile/profile.page';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {

  constructor(
    public modalController: ModalController,
    public auth: AuthService,
    public firestore: FirestoreService
  ) { }

  ngOnInit() {
    const user = this.firestore.userInit(this.auth.getUserId());
  }

  async openProfile() {
    const modal =  await this.modalController.create({
      component: ProfilePage
    });
    return await modal.present();
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
