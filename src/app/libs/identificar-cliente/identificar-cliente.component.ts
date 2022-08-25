import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService, RotaEnum } from '@app/shared/_index';

@Component({
  selector: 'ftc-identificar-cliente',
  templateUrl: './identificar-cliente.component.html',
  styleUrls: ['./identificar-cliente.component.scss'],
})
export class IdentificarClienteComponent implements OnInit {
  @Output() isCarregandoOutput = new EventEmitter<boolean>();

  public form!: FormGroup;
  public valueData: string = '';
  public isCarregando: boolean = false;
  public erroMensagem: string = '';

  // public cpf = '[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}';
  // public cnpj = '[0-9]{2}.?[0-9]{3}.?[0-9]{3}/?[0-9]{4}-?[0-9]{2}';
  // public codigo = '[0-9]{6}';

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      cliente: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    this.isCarregandoOutput.emit((this.isCarregando = true));
    this.erroMensagem = this.identify();
    this.isCarregandoOutput.emit((this.isCarregando = false));
  }

  private identify(): string {
    if (this.valueData === '') return 'campo identificador obrigatório';

    if (this.clienteService.identify(this.valueData))
      this.router.navigate([RotaEnum.DADOS_CADASTRAIS]);
    else return 'cpf, cnpj ou código inexistente';

    return '';
  }
}
