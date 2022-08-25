import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '@app/libs/libs.module';
import { ComponentsModule } from '@app/components/components.module';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { DadosCadastraisComponent } from './dados-cadastrais/dados-cadastrais.component';

@NgModule({
  declarations: [InicioComponent, EntrarComponent, DadosCadastraisComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LibsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [InicioComponent, EntrarComponent, DadosCadastraisComponent],
})
export class PagesModule {}
