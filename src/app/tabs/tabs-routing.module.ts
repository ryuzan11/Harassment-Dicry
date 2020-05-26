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
            loadChildren: './timeline/timeline.module#TimelinePageModule'
          }
        ]
      },
      {
        path: 'dictionary',
        children: [
          {
            path: '',
        loadChildren: './dictionary/dictionary.module#DictionaryPageModule'
      }
    ]
      },
      {
        path: 'quiz',
        children: [
          {
            path: '',
        loadChildren: './quiz/quiz.module#QuizPageModule'
      }
    ]
      },
      {
        path: 'list',
        children: [
          {
            path: '',
        loadChildren: './list/list.module#ListPageModule'
      }
    ]
      },
      {
        path: 'other',
        children: [
          {
            path: '',
        loadChildren: './other/other.module#OtherPageModule'
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
