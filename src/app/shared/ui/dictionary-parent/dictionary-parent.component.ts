import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { DictionaryChildrenComponent } from '../dictionary-children/dictionary-children.component';
import { Obj } from '../../models/obj';

@Component({
  selector: 'ls-dictionary-parent',
  templateUrl: './dictionary-parent.component.html',
  styleUrls: ['./dictionary-parent.component.scss'],
})
export class DictionaryParentComponent implements OnInit {
  lists: Obj<string> = {};
  nextPage = DictionaryChildrenComponent;

  constructor(private navParams: NavParams) { }

  ngOnInit() {
    this.lists = this.navParams.data.lists;
  }

}
