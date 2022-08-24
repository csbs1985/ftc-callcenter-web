import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  public tipo: string = 'text';
  public typeNative: string = 'text';
  public textButton: string = 'mostrar';

  @Input() disabled: boolean = false;
  @Input() erroMensagem!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() inputReverse: boolean = false;
  @Input() isToggleButton: boolean = false;

  @Input() set button(value: string) {
    this.textButton = value !== '' ? value : 'mostrar';
  }

  @Input() set typeForm(value: string) {
    this.typeNative = value;
    if (value === 'senha') this.isPassword = true;
    this.tipo = value;
  }

  @Output() inputButtonOutput = new EventEmitter();

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
      this.tipo = 'text';
      this.button = 'ocultar';
    } else {
      this.isPassword = true;
      this.tipo = 'senha';
      this.button = 'mostrar';
    }
  }

  public selectButton(): void {
    this.inputButtonOutput.emit(true);
  }
}
