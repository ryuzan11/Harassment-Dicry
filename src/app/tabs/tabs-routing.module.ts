import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'main',
    component: TabsPage,
    children: [
      {
        path: 'timeline',
        children: [
          {
            path: '',
            loadChildren: () => import('./timeline/timeline.module').then(m => m.TimelinePageModule)
          }
        ]
      },
      {
        path: 'dictionary',
        children: [
          {
            path: '',
        loadChildren: () => import('./dictionary/dictionary.module').then(m => m.DictionaryPageModule)
      }
    ]
      },
      {
        path: 'quiz',
        children: [
          {
            path: '',
        loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizPageModule)
      }
    ]
      },
      {
        path: 'list',
        children: [
          {
            path: '',
        loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
      }
    ]
      },
      {
        path: 'other',
        children: [
          {
            path: '',
        loadChildren: () => import('./other/other.module').then(m => m.OtherPageModule)
      }
    ]
      },
      {
        path: '',
        redirectTo: '/main/timeline',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/main/timeline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
