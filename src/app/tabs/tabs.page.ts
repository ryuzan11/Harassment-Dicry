import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  @ViewChild('myTabs', {static: false})
  tabs: IonTabs;

  constructor() {}

  ngOnInit() {
  }

  getTab() {
    console.log(this.tabs.getSelected());
  }

}
