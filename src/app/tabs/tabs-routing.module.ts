import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'main-tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../menu/menu.module').then(m => m.MenuPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/main-tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
