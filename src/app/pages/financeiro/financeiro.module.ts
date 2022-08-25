import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '@app/libs/libs.module';
import { ComponentsModule } from '@app/components/components.module';
import { DadosCadastraisComponent } from './dados-cadastrais/dados-cadastrais.component';

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
