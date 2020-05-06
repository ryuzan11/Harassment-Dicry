import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { DictionaryDetailComponent } from '../dictionary-detail/dictionary-detail.component';

@Component({
  selector: 'ls-dictionary-children',
  templateUrl: './dictionary-children.component.html',
  styleUrls: ['./dictionary-children.component.scss'],
})
export class DictionaryChildrenComponent implements OnInit {
  variations: [{[key: string]: string}];
  nextPage = DictionaryDetailComponent;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.variations = this.navParams.data.children;
  }

}
