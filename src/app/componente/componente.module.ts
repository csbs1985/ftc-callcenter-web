import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconeComponent } from './icone/icone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { ArtigoComponent } from './artigo/artigo.component';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle/toggle.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { OverlayComponent } from './overlay/overlay.component';
import { BibliotecaModule } from '@app/biblioteca/biblioteca.module';
import { FavoritosComponent } from './favoritos/favoritos.component';

@NgModule({
  declarations: [
    IconeComponent,
    MenuComponent,
    ArtigoComponent,
    ToggleComponent,
    CabecalhoComponent,
    FavoritosComponent,
    ProgressoComponent,
    OverlayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BibliotecaModule,
  ],
  exports: [
    IconeComponent,
    MenuComponent,
    ArtigoComponent,
    ToggleComponent,
    CabecalhoComponent,
    FavoritosComponent,
    ProgressoComponent,
    OverlayComponent,
  ],
})
export class ComponenteModule {}
