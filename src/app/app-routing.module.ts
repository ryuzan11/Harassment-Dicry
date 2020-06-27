import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectUnauthorized = () => redirectUnauthorizedTo(['/home']);
const redirectLoggedIn = () => redirectLoggedInTo(['/main/timeline']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./lp/lp.module').then(m => m.LpPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedIn }
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule),
      canActivate: [AngularFireAuthGuard],
      data: { authGuardPipe: redirectLoggedIn }
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorized }
  },
  {
    path: '**',
    redirectTo: '',
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
