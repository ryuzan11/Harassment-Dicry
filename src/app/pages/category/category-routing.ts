import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPage } from '../category/category.page';

const routes: Routes = [
  { path: '',
    component: CategoryPage,
  },
  // {
  //   path: 'timeline',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'category',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'quiz',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'other',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryPageRoutingModule {}
