import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ClienteEnum,
  ClienteInterface,
  ClienteService,
} from '@app/compartilhar/_index';

@Component({
  selector: 'ftc-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.scss'],
})
export class DadosCadastraisComponent implements OnInit {
  public clienteAtual!: ClienteInterface;
  public form!: FormGroup;

  public erroCep!: string;
  public erroCpfCnpj!: string;
  public erroDataNascimento!: string;
  public erroLagradouro!: string;
  public erroNumero!: string;
  public erroPrimeiroNome!: string;
  public erroRG!: string;
  public erroSobrenome!: string;

  public valorCep: string = '';
  public valorCpfCnpj: string = '';
  public valorDataNascimento: string = '';
  public valorLagradouro: string = '';
  public valorPrimeiroNome: string = '';
  public valorRg: string = '';
  public valorSobrenome: string = '';
  public valorNumero: string = '';

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.clienteService.clienteAtual.subscribe((x) => (this.clienteAtual = x));
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      codigo: ['', Validators.required],
      primeiroNome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      tipoCadastro: ['', Validators.required],
      dataNascimento: [''],
      rg: ['', Validators.pattern('')],
      cpfCnpj: ['', Validators.pattern('')],
      cep: ['', Validators.pattern('')],
      lagradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      enderecoCorrespondencia: ['', Validators.required],
      celular: ['', Validators.pattern('')],
      celularAlternativo: ['', Validators.pattern('')],
      telefoneRecidencia: ['', Validators.pattern('')],
      telefoneComercial: ['', Validators.pattern('')],
      permiteSms: ['', Validators.required],
      email: ['', Validators.pattern('')],
      emailAlternativo: ['', Validators.pattern('')],
      plano: ['', Validators.required],
      autorizaNfe: ['', Validators.required],
      formaEnvioExtrato: ['', Validators.required],
    });

    this.valorInitial();
  }

  public valorInitial(): void {
    this.valorCep = this.clienteAtual.cep;
    this.valorCpfCnpj = this.clienteAtual.cpfCnpj || '';
    this.valorDataNascimento = this.clienteAtual.dataNascimento || '';
    this.valorLagradouro = this.clienteAtual.lagradouro;
    this.valorPrimeiroNome = this.clienteAtual.primeiroNome;
    this.valorRg = this.clienteAtual.rg || '';
    this.valorSobrenome = this.clienteAtual.sobrenome;
    this.valorNumero = this.clienteAtual.numero;
  }

  public onSubmit(): void {}

  public get ClienteEnum(): typeof ClienteEnum {
    return ClienteEnum;
  }
}
