import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimezoneComponent } from './timezone/timezone.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [TimezoneComponent, ContactsComponent, NewsComponent],
  imports: [CommonModule],
  exports: [TimezoneComponent, ContactsComponent, NewsComponent],
})
export class LibsModule {}
