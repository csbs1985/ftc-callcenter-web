import { ComponenteModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BibliotecaModule } from '../libs/libs.module';
import { FinanceiroModule } from './financeiro/financeiro.module';

@NgModule({
  declarations: [InicioComponent, EntrarComponent],
  imports: [
    CommonModule,
    ComponenteModule,
    BibliotecaModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceiroModule,
  ],
  exports: [InicioComponent, EntrarComponent, FinanceiroModule],
})
export class PaginaModule {}
