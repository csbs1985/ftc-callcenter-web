import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BibliotecaModule } from '@app/biblioteca/biblioteca.module';
import { ComponenteModule } from '@app/componente/componente.module';
import { DadosCadastraisComponent } from './dados-cadastrais/dados-cadastrais.component';

@NgModule({
  declarations: [DadosCadastraisComponent],
  imports: [
    CommonModule,
    BibliotecaModule,
    ComponenteModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DadosCadastraisComponent],
})
export class FinanceiroModule {}
