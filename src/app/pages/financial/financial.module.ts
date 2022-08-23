import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationDataComponent } from './registration-data/registration-data.component';
import { LibsModule } from '@app/libs/libs.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [RegistrationDataComponent],
  imports: [CommonModule, LibsModule, ComponentsModule],
  exports: [RegistrationDataComponent],
})
export class FinancialModule {}
