import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'timeline',
          loadChildren: () =>
          import('../pages/timeline/timeline.module').then(m => m.TimelinePageModule),
      },
      {
        path: 'dictionary',
          loadChildren: () =>
          import('../pages/dictionary/dictionary.module').then(m => m.DictionaryPageModule),
      },
      {
        path: 'quiz',
          loadChildren: () =>
          import('../pages/quiz/quiz.module').then(m => m.QuizPageModule)
      },
      {
        path: 'list',
          loadChildren: () =>
          import('../pages/list/list.module').then(m => m.ListPageModule)
      },
      {
        path: 'other',
          loadChildren: () =>
          import('../pages/other/other.module').then(m => m.OtherPageModule)
      },
      {
        path: '',
        redirectTo: '/main-tabs/timeline',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main-tabs/timeline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
