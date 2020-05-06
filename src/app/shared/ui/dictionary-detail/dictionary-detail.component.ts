import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss'],
})
export class DictionaryDetailComponent implements OnInit {
  name: string;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.name = this.navParams.data.name;
  }

}
