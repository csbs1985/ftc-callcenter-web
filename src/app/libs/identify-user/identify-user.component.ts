import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ftc-identify-user',
  templateUrl: './identify-user.component.html',
  styleUrls: ['./identify-user.component.scss'],
})
export class IdentifyUserComponent implements OnInit {
  @Output() loadingOutput = new EventEmitter<boolean>();

  public form!: FormGroup;
  public valueData: string = '';
  public loading: boolean = false;
  public errorMessage!: string;

  // public cpf = '[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}';
  // public cnpj = '[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2}';
  // public code = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  public onChange(value: string) {}

  private initForm(): void {
    this.form = this.formBuilder.group({
      customer: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    this.loadingOutput.emit((this.loading = true));
    this.errorMessage = this.validateCustomer();
    this.loadingOutput.emit((this.loading = false));
  }

  private identify() {}

  private validateCustomer(): string {
    if (this.valueData === '') return 'campo identificador obrigatório';
    if (this.valueData !== '123456')
      return 'cpf, cnpj ou código interno inexistente';
    return '';
  }
}
