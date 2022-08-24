import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BibliotecaModule } from '@app/biblioteca/biblioteca.module';
import { ComponenteModule } from '@app/componente/componente.module';
import { EntrarComponent } from './entrar/entrar.component';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { InicioComponent } from './inicio/inicio.component';

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
