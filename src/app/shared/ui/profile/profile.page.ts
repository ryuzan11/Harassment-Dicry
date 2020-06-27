import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AuthService } from '../../../auth/auth.service';
import { UserService} from '../../api/user.service';
import { IUser } from '../../models/i-user';
import { PrefecturesService } from '../../service/prefectures.service';
import { Prefecture } from '../../models/prefecture';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  uid: string;
  user: IUser = {
    displayName: null,
    photoDataUrl: null,
    prefecture: null,
    gender: null,
    profile: null
  };
  nowDisplayName = false;
  photo: string;

  get prefectures() {
    return this.prefecturesService.prefectures;
  }

  constructor(
    public modalController: ModalController,
    public alertController: AlertController,
    public auth: AuthService,
    private userService: UserService,
    public prefecturesService: PrefecturesService
  ) { }

  ngOnInit() {
  }

  modalDismiss(): void {
    this.modalController.dismiss();
  }

  async ionViewWillEnter() {
    this.uid = this.userService.user.uid;
    const user = await this.userService.userInit(this.uid);
    if (user) {
      this.user = user;
      this.nowDisplayName = user.displayName ? true : false;
    }
  }

  async updateProfile() {
    if (this.photo) {
      this.user.photoDataUrl = this.photo;
    }
    await this.userService.userSet(this.user);
    this.modalController.dismiss();
  }

  async takePicture(): Promise<void> {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      resultType: CameraResultType.DataUrl
    });
    this.photo = image && image.dataUrl;
  }

  async openPrefectureHelp() {
    const alert = await this.alertController.create({
      header: '所在地について',
      message: '投稿する際に必要な「発生場所」項目にこれが初期設定として自動で入力されます',
    });
    await alert.present();
  }

}
