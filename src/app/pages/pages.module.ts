import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '../libs/libs.module';
import { FinancialModule } from './financial/financial.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LibsModule,
    FormsModule,
    ReactiveFormsModule,
    FinancialModule,
  ],
  exports: [HomeComponent, LoginComponent, FinancialModule],
})
export class PagesModule {}
