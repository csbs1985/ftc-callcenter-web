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
  public buttonPassword: string = 'mostrar';
  public isPassword: boolean = false;
  public type: string = 'text';
  public typeNative: string = 'text';
  public field = '';

  @Input() disabled: boolean = false;
  @Input() placeholder!: string;
  @Input() errorMessage!: string;
  @Input() showError: boolean = false;
  @Input() minLength!: number;
  @Input() maxLength!: number;

  @Input() set typeForm(value: string) {
    this.typeNative = value;
    if (value === 'password') this.isPassword = true;
    this.type = value;
  }

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

  keyup(event: any): void {
    this.showError = this.minLength >= event.target.value.lenght ? true : false;
  }

  toogle(): void {
    if (this.isPassword) {
      this.isPassword = false;
      this.type = 'text';
      this.buttonPassword = 'ocultar';
      return;
    }

    this.isPassword = true;
    this.type = 'password';
    this.buttonPassword = 'mostrar';
  }
}
