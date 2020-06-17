import { Component, OnInit, Input, ViewChild, HostListener, Output } from '@angular/core';
import { AlertController, IonTextarea } from '@ionic/angular';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ls-editable-text',
  templateUrl: './editable-text.page.html',
  styleUrls: ['./editable-text.page.scss'],
})
export class EditableTextPage implements OnInit {
  @Input()
  value: string;

  @Output()
  changeValue = new EventEmitter<string>();

  originalValue: string;
  isEditMode = false;
  textAreaElement: HTMLTextAreaElement;

  @ViewChild('textArea', {static: false})
  textArea: IonTextarea;

  @HostListener('click')
  onFocus() {
    this.originalValue = this.value;
    this.isEditMode = true;
    setTimeout(() => {
      this.textArea.setFocus();
    }, 1);
  }

  constructor(
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  onChange() {
    this.isEditMode = false;
    if (this.originalValue !== this.value) {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: '本当に変更しますか？',
      buttons: [
        {
          text: 'キャンセル',
          role: 'cancel',
          handler: () => {
            this.value = this.originalValue;
          }
        }, {
          text: '変更する',
          handler: () => {
            this.changeValue.emit(this.value);
          }
        }
      ]
    });
    await alert.present();
  }

}
