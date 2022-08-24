import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticarGuard, RotaEnum } from './compartilhar/_index';
import { EntrarComponent } from './pagina/entrar/entrar.component';
import { DadosCadastraisComponent } from './pagina/financeiro/dados-cadastrais/dados-cadastrais.component';
import { InicioComponent } from './pagina/inicio/inicio.component';

const routes: Routes = [
  {
    path: RotaEnum.INICIO.replace('/', ''),
    component: InicioComponent,
    canActivate: [AutenticarGuard],
  },
  {
    path: RotaEnum.ENTRAR.replace('/', ''),
    component: EntrarComponent,
  },
  {
    path: RotaEnum.DADOS_CADASTRAIS.substring(0),
    component: DadosCadastraisComponent,
    canActivate: [AutenticarGuard],
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AutenticarGuard],
  //   data: { roles: [PerfilEnum.ADMIN] },
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
