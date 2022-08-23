import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard, ProfilesEnum, RouterEnum } from './shared/_index';

const routes: Routes = [
  {
    path: RouterEnum.HOME.replace('/', ''),
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: RouterEnum.LOGIN.replace('/', ''),
    component: LoginComponent,
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard],
  //   data: { roles: [ProfilesEnum.ADMIN] },
  // },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
