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
  tabs: IonTabs;

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

  constructor(public auth: AuthService, private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
   }

  ngOnInit() {}

  logOut(): void {
    this.auth.authSignOut();
  }

}
