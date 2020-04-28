import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
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
      url: '/menu/timeline'
    },
    {
      title: '辞書',
      url: '/menu/category'
    },
    {
      title: 'クイズ',
      url: '/menu/quiz'
    },
    {
      title: 'リスト',
      url: '/menu/list'
    },
    {
      title: 'その他',
      url: '/menu/other'
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
