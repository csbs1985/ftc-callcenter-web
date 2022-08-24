import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteInterface, ClienteService } from '@app/shared/_index';

@Component({
  selector: 'ftc-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.scss'],
})
export class DadosCadastraisComponent implements OnInit {
  public clienteAtual!: ClienteInterface;
  public form!: FormGroup;

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
      codigo: [this.clienteAtual.codigo, Validators.required],
      primeiroNome: [this.clienteAtual.primeiroNome, Validators.required],
      sobrenome: [this.clienteAtual.sobrenome, Validators.required],
      tipoCadastro: [this.clienteAtual.tipoCadastro, Validators.required],
      dataNascimento: [this.clienteAtual.dataNascimento],
      rg: [this.clienteAtual.rg, Validators.pattern('')],
      cpf: [this.clienteAtual.cpf, Validators.pattern('')],
      cnpj: [this.clienteAtual.cnpj, Validators.pattern('')],
      cep: [this.clienteAtual.cep, Validators.pattern('')],
      lagradouro: [this.clienteAtual.lagradouro, Validators.required],
      numero: [this.clienteAtual.numero, Validators.required],
      bairro: [this.clienteAtual.bairro, Validators.required],
      complemento: [this.clienteAtual.complemento],
      cidade: [this.clienteAtual.cidade, Validators.required],
      estado: [this.clienteAtual.estado, Validators.required],
      enderecoCorrespondencia: [
        this.clienteAtual.enderecoCorrespondencia,
        Validators.required,
      ],
      celular: [this.clienteAtual.celular, Validators.pattern('')],
      celularAlternativo: [
        this.clienteAtual.celularAlternativo,
        Validators.pattern(''),
      ],
      telefoneRecidencia: [
        this.clienteAtual.telefoneRecidencia,
        Validators.pattern(''),
      ],
      telefoneComercial: [
        this.clienteAtual.telefoneComercial,
        Validators.pattern(''),
      ],
      permiteSms: [this.clienteAtual.permiteSms, Validators.required],
      email: [this.clienteAtual.email, Validators.pattern('')],
      emailAlternativo: [
        this.clienteAtual.emailAlternativo,
        Validators.pattern(''),
      ],
      plano: [this.clienteAtual.plano, Validators.required],
      autorizaNfe: [this.clienteAtual.autorizaNfe, Validators.required],
      formaEnvioExtrato: [
        this.clienteAtual.formaEnvioExtrato,
        Validators.required,
      ],
    });
  }
}
