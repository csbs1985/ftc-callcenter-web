import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { InputTextComponent } from './input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IconComponent, InputTextComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [IconComponent, InputTextComponent],
})
export class ComponentsModule {}
