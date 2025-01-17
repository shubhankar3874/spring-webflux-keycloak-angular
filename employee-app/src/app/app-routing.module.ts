import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoLoginGuard } from 'angular-auth-oidc-client';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { SsoComponent } from './sso/sso.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

const routes: Routes = [{
  path: 'sign-out',
  pathMatch: 'full',
  component: SignOutComponent
}, {
  path: 'forbidden',
  pathMatch: 'full',
  component: ForbiddenComponent
}, {
  path: 'unauthorized',
  pathMatch: 'full',
  component: UnauthorizedComponent
}, {
  path: 'sso',
  pathMatch: 'full',
  component: SsoComponent
}, {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  pathMatch: 'full',
  loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  canLoad: [AutoLoginGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
