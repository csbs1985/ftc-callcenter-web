import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService, RouterEnum } from '@app/shared/_index';

@Component({
  selector: 'ftc-identify-customer',
  templateUrl: './identify-customer.component.html',
  styleUrls: ['./identify-customer.component.scss'],
})
export class IdentifyCustomerComponent implements OnInit {
  @Output() loadingOutput = new EventEmitter<boolean>();

  public form!: FormGroup;
  public valueData: string = '';
  public loading: boolean = false;
  public errorMessage: string = '';

  // public cpf = '[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}';
  // public cnpj = '[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2}';
  // public code = '[0-9]{6}';

  constructor(
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      customer: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    this.loadingOutput.emit((this.loading = true));
    this.errorMessage = this.identify();
    this.loadingOutput.emit((this.loading = false));
  }

  private identify(): string {
    if (this.valueData === '') return 'campo identificador obrigatório';

    if (this.customerService.identify(Number(this.valueData)))
      this.router.navigate([RouterEnum.DADOS_CADASTRAIS]);
    else return 'cpf, cnpj ou código inexistente';

    return '';
  }
}
