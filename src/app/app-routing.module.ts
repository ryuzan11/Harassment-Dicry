import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectUnauthorized = () => redirectUnauthorizedTo(['auth/signin']);
const redirectLoggedIn = () => redirectLoggedInTo(['/']);

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule),
      canActivate: [AngularFireAuthGuard],
      data: { authGuardPipe: redirectLoggedIn }
  },
  {
    path: '',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorized }
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then( m => m.ListPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
