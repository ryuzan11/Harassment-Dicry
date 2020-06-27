import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, RouterEvent } from '@angular/router';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  @ViewChild('myTabs', {static: false})
  myTabs: IonTabs;

  pages = [
    {
      title: 'タイムライン',
      url: '/main/timeline'
    },
    {
      title: '辞書',
      url: '/main/dictionary'
    },
    {
      title: 'クイズ',
      url: '/main/quiz'
    },
    {
      title: 'リスト',
      url: '/main/list'
    },
    {
      title: 'その他',
      url: '/main/other'
    },
  ];

  selectedPath = '';
  resetStackTabs = ['timeline', 'timeline', 'dictionary', 'quiz'];

  constructor(
    public auth: AuthService,
    private router: Router,
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}

  initTabStack = (event: MouseEvent) => {
    const { tab } = event.composedPath().find((ele: any) =>
    ele.tagName === 'ION-TAB-BUTTON') as EventTarget & { tab: string };
    if (this.resetStackTabs.includes(tab) && this.myTabs.outlet.canGoBack(1, tab)) {
      event.stopImmediatePropagation();
      return this.myTabs.outlet.pop(1, tab);
    }
  }

}
