import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneComponent } from './timezone/timezone.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [TimezoneComponent, ContactsComponent],
  imports: [CommonModule],
  exports: [TimezoneComponent, ContactsComponent],
})
export class LibsModule {}
