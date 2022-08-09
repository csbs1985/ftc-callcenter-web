import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { ToggleComponent } from './toggle/toggle.component';

@NgModule({
  declarations: [
    IconComponent,
    InputTextComponent,
    MenuComponent,
    InfoComponent,
    ToggleComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    IconComponent,
    InputTextComponent,
    MenuComponent,
    InfoComponent,
    ToggleComponent,
  ],
})
export class ComponentsModule {}
