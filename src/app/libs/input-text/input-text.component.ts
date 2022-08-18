import { Component, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'ftc-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputTextComponent,
      multi: true,
    },
  ],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  public form!: FormGroup;
  public field = '';

  @Input() button!: string;
  @Input() disabled: boolean = false;
  @Input() errorMessage!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() typeForm: string = 'text';
  @Input() inputReverse: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onChange: any = () => {};
  onTouch: any = () => {};

  set value(val: string) {
    this.field = val;
    this.onChange(val);
    this.onTouch(val);
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouch = onTouched;
  }
}
