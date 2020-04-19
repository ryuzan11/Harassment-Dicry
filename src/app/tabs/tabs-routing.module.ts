import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'timeline',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../timeline/timeline.module').then(m => m.TimelineModule)
          }
        ]
      },
      {
        path: 'category',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../category/category.module').then(m => m.CategoryPageModule)
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
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/timeline',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/timeline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
