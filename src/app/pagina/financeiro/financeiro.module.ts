import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosCadastraisComponent } from './dados-cadastrais/dados-cadastrais.component';
import { BibliotecaModule } from '@app/libs/libs.module';
import { ComponenteModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
