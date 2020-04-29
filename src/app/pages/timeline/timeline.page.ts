import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.page.html',
  styleUrls: ['timeline.page.scss']
})
export class TimelinePage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  localNotification(): void {
    Plugins.LocalNotifications.schedule({
      notifications: [
        {
          id: 1,
          title: 'ようこそ',
          body: 'Ionic Frameworkへ',
          schedule: {at: new Date(Date.now() + 1000 * 5)}
        }
      ]
    });
  }

}
