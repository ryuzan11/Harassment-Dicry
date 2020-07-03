import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavParams } from '@ionic/angular';
import { UserService } from '../../api/user.service';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.page.html',
  styleUrls: ['./report-modal.page.scss'],
})
export class ReportModalPage implements OnInit {
  reason = '';
  id: string;
  sid: string;
  type: 'story' | 'user' | 'answer';

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private useService: UserService,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.id = this.navParams.data.id;
    this.type = this.navParams.data.type;
    this.sid = this.navParams.data.sid ? this.navParams.data.sid : undefined;
  }

  async openReportAlert() {
    const alert = await this.alertCtrl.create({
      header: '本当に報告しますか？',
      message: '一度報告すると撤回できません。',
      buttons: [{
        text: 'キャンセル',
        role: 'cansel',
        cssClass: 'secondary'
      }, {
        text: '報告する',
        cssClass: 'danger',
        handler: () => {
          this.useService.setReport(this.id, this.type, this.reason, this.sid);
        }
      }]
    });
    await alert.present();

    alert.onDidDismiss().then(() => this.modalDismiss());
  }

  modalDismiss(): void {
    this.modalCtrl.dismiss();
  }
}
