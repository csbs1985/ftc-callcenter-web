import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosCadastraisComponent } from './dados-cadastrais/dados-cadastrais.component';
import { LibsModule } from '@app/libs/libs.module';
import { ComponentsModule } from '../../components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DadosCadastraisComponent],
  imports: [
    CommonModule,
    LibsModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [DadosCadastraisComponent],
})
export class FinanceiroModule {}
