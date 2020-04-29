import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'タイムライン',
      url: '/main-tabs/timeline'
    },
    {
      title: '辞書',
      url: '/main-tabs/dictionary'
    },
    {
      title: 'クイズ',
      url: '/main-tabs/quiz'
    },
    {
      title: 'リスト',
      url: '/main-tabs/list'
    },
    {
      title: 'その他',
      url: '/main-tabs/other'
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

  ngOnInit() {
  }

  logOut(): void {
    this.auth.authSignOut();
  }

}
