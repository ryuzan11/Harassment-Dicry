import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  uid: string;
  user = {
    displayName: null,
    photoDataUrl: null,
  };
  photo: string;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  modalDismiss(): void {
    this.modalController.dismiss();
  }

  async takePicture(): Promise<void> {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl
    });
    this.photo = image && image.dataUrl;
  }

}
