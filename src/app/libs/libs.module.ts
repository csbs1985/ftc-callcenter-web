import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneComponent } from './timezone/timezone.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';
import { IdentifyUserComponent } from './identify-user/identify-user.component';
import { InputButtonComponent } from './input-button/input-button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SemPararComponent } from './sem-parar/sem-parar.component';
import { CallCenterComponent } from './call-center/call-center.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    TimezoneComponent,
    ContactsComponent,
    NewsComponent,
    IdentifyUserComponent,
    InputButtonComponent,
    InputTextComponent,
    SemPararComponent,
    CallCenterComponent,
    NotificationComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    TimezoneComponent,
    ContactsComponent,
    NewsComponent,
    IdentifyUserComponent,
    InputButtonComponent,
    InputTextComponent,
    SemPararComponent,
    CallCenterComponent,
    NotificationComponent,
  ],
})
export class LibsModule {}
