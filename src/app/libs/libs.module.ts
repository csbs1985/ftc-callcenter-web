import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneComponent } from './timezone/timezone.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { IdentificarClienteComponent } from './identificar-cliente/identificar-cliente.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SemPararComponent } from './sem-parar/sem-parar.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { NotificationComponent } from './notification/notification.component';
import { DadosClienteComponent } from './dados-cliente/dados-cliente.component';
import { LimitsComponent } from './limits/limits.component';
import { ChecklistComponent } from './checklist/checklist.component';

@NgModule({
  declarations: [
    CallCenterComponent,
    ChecklistComponent,
    ContactsComponent,
    DadosClienteComponent,
    IdentificarClienteComponent,
    InputButtonComponent,
    InputTextComponent,
    LimitsComponent,
    NewsComponent,
    NotificationComponent,
    SemPararComponent,
    TimezoneComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    CallCenterComponent,
    ChecklistComponent,
    ContactsComponent,
    DadosClienteComponent,
    IdentificarClienteComponent,
    InputButtonComponent,
    InputTextComponent,
    LimitsComponent,
    NewsComponent,
    NotificationComponent,
    SemPararComponent,
    TimezoneComponent,
  ],
})
export class LibsModule {}
