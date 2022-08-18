import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ftc-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputButtonComponent,
      multi: true,
    },
  ],
})
export class InputButtonComponent implements OnInit, ControlValueAccessor {
  public isPassword: boolean = false;
  public type: string = 'text';
  public typeNative: string = 'text';
  public textButton: string = 'mostrar';

  // @Input() button!: string;
  @Input() disabled: boolean = false;
  @Input() errorMessage!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() inputReverse: boolean = false;
  @Input() isToggleButton: boolean = false;

  @Input() set button(value: string) {
    this.textButton = value !== '' ? value : 'mostrar';
  }

  @Input() set typeForm(value: string) {
    this.typeNative = value;
    if (value === 'password') this.isPassword = true;
    this.type = value;
  }

  constructor() {}

  ngOnInit(): void {}

  onChange: any = () => {};
  onTouch: any = () => {};

  public set value(val: string) {
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

  public click(): void {
    this.isToggleButton ? this.toggleLabel() : this.selectButton();
  }

  public toggleLabel(): void {
    if (this.isPassword) {
      this.isPassword = false;
      this.type = 'text';
      this.button = 'ocultar';
    } else {
      this.isPassword = true;
      this.type = 'password';
      this.button = 'mostrar';
    }
  }

  public selectButton(): void {}
}