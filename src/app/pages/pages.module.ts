import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '@app/libs/libs.module';
import { ComponentsModule } from '@app/components/components.module';
import { EntrarComponent } from './entrar/entrar.component';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [InicioComponent, EntrarComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LibsModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceiroModule,
  ],
  exports: [InicioComponent, EntrarComponent, FinanceiroModule],
})
export class PagesModule {}
