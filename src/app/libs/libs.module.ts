import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneComponent } from './timezone/timezone.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { IdentifyCustomerComponent } from './identify-customer/identify-customer.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SemPararComponent } from './sem-parar/sem-parar.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { NotificationComponent } from './notification/notification.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { LimitsComponent } from './limits/limits.component';

@NgModule({
  declarations: [
    CallCenterComponent,
    ContactsComponent,
    CustomerDataComponent,
    IdentifyCustomerComponent,
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
    ContactsComponent,
    CustomerDataComponent,
    IdentifyCustomerComponent,
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
