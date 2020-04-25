import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'timeline',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../timeline/timeline.module').then(m => m.TimelinePageModule),
          },
          {
            path: 'timeline',
            redirectTo: '',
            pathMatch: 'full'
          },
        ]
      },
      {
        path: 'category',
          children: [
            {
              path: '',
              loadChildren: () =>
              import('../dictionary/dictionary.module').then(m => m.DictionaryPageModule),
            },
            {
              path: 'category',
              redirectTo: '',
              pathMatch: 'full'
            }
          ]
      },
      {
        path: 'quiz',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../quiz/quiz.module').then(m => m.QuizPageModule)
          },
          {
            path: 'quiz',
            redirectTo: '',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'other',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../other/other.module').then(m => m.OtherPageModule)
          },
          {
            path: 'other',
            redirectTo: '',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'category/timeline',
        redirectTo: 'timeline',
        pathMatch: 'full'
      },
      {
        path: 'quiz/timeline',
        redirectTo: 'timeline',
        pathMatch: 'full'
      },
      {
        path: 'other/timeline',
        redirectTo: 'timeline',
        pathMatch: 'full'
      },
      {
        path: 'timeline/category',
        redirectTo: 'category',
        pathMatch: 'full'
      },
      {
        path: 'quiz/category',
        redirectTo: 'category',
        pathMatch: 'full'
      },
      {
        path: 'other/category',
        redirectTo: 'category',
        pathMatch: 'full'
      },
      {
        path: 'timeline/quiz',
        redirectTo: 'quiz',
        pathMatch: 'full'
      },
      {
        path: 'category/quiz',
        redirectTo: 'quiz',
        pathMatch: 'full'
      },
      {
        path: 'other/quiz',
        redirectTo: 'quiz',
        pathMatch: 'full'
      },
      {
        path: 'timeline/other',
        redirectTo: 'other',
        pathMatch: 'full'
      },
      {
        path: 'category/other',
        redirectTo: 'other',
        pathMatch: 'full'
      },
      {
        path: 'quiz/other',
        redirectTo: 'other',
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/menu/timeline',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/timeline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
