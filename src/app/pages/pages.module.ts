import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibsModule } from '../libs/libs.module';
import { FinanceiroModule } from './financeiro/financeiro.module';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LibsModule,
    FormsModule,
    ReactiveFormsModule,
    FinanceiroModule,
  ],
  exports: [HomeComponent, LoginComponent, FinanceiroModule],
})
export class PagesModule {}
