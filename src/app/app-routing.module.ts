import { NotAuthenticatedGuard } from './guards/not-authenticated.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module')
      .then( m => m.AuthPageModule),
    canActivate:[AuthenticatedGuard]
  },
  {
    path: 'public',
    loadChildren: () => import('./pages/public/public.module')
      .then( m => m.PublicPageModule),
    canActivate:[NotAuthenticatedGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
