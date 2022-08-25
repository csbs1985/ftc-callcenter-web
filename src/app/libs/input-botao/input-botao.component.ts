import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ftc-input-botao',
  templateUrl: './input-botao.component.html',
  styleUrls: ['./input-botao.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputBotaoComponent,
      multi: true,
    },
  ],
})
export class InputBotaoComponent implements OnInit, ControlValueAccessor {
  public isSenha: boolean = false;
  public tipo: string = 'text';
  public tipoNativo: string = 'text';
  public botaoTexto: string = 'mostrar';

  @Input() desabilitado: boolean = false;
  @Input() erroMensagem!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() inputReverse: boolean = false;
  @Input() isTrocarBotao: boolean = false;

  @Input() set button(value: string) {
    this.botaoTexto = value !== '' ? value : 'mostrar';
  }

  @Input() set typeForm(value: string) {
    this.tipoNativo = value;
    if (value === 'password') this.isSenha = true;
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
    this.isTrocarBotao ? this.toggleLabel() : this.selectButton();
  }

  public toggleLabel(): void {
    if (this.isSenha) {
      this.isSenha = false;
      this.tipo = 'text';
      this.button = 'ocultar';
    } else {
      this.isSenha = true;
      this.tipo = 'password';
      this.button = 'mostrar';
    }
  }

  public selectButton(): void {
    this.inputButtonOutput.emit(true);
  }
}
