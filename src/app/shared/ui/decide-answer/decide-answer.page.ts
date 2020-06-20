import { Component, OnInit, Input } from '@angular/core';
import { Answer } from '../../models/story';
import { AlertController, ModalController } from '@ionic/angular';
import { StoryService } from '../../api/story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decide-answer',
  templateUrl: './decide-answer.page.html',
  styleUrls: ['./decide-answer.page.scss'],
})
export class DecideAnswerPage implements OnInit {
  @Input() answers: Answer[];
  @Input() sid: string;

  constructor(
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private storyService: StoryService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async openConfirmAlert(a: Answer) {
    const alert = await this.alertCtrl.create({
      header: 'この回答をベストアンサーにしますか？',
      message: '確定後はベストアンサーを変更できません。',
      buttons: [
        {
          text: 'いいえ',
          role: 'cancel'
        }, {
          text: 'はい',
          handler: () => {
            this.decideAnswer(a);
          }
        }
      ]
    });
    await alert.present();
  }

  modalDismiss(): void {
    this.modalCtrl.dismiss();
  }

  decideAnswer(a: Answer) {
    const {answerId, answer, user: answerUser} = a;
    this.storyService.updateDecideAnswer(this.sid, {answerId, answer, answerUser}).finally(() => {
      this.modalDismiss();
      location.reload();
    }).catch((error) => {
      console.error(error);
      this.modalDismiss();
    });
  }
}
