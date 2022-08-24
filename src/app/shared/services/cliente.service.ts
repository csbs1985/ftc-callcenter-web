import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  CryptografyService,
  ClienteInterface,
  LocalStorageService,
  RouterEnum,
  TipoCadastroEnum,
} from '../_index';

const cliente: ClienteInterface = {
  id: 1234567,
  codigo: 1234567,
  primeiroNome: 'airton',
  sobrenome: 'senna da silva',
  tipoCadastro: TipoCadastroEnum.PESSOA_FISICA,
  dataNascimento: '01/01/1900',
  rg: 123456789,
  cpf: 12345678901,
  cnpj: 0,
  cep: 12345667,
  lagradouro: 'av.brasil',
  numero: 123,
  bairro: 'centro',
  complemento: '',
  cidade: 'são paulo',
  estado: 'são paulo',
  enderecoCorrespondencia: true,
  celular: '+55 (11) 000 000 00',
  celularAlternativo: '+55 (11) 000 000 00',
  telefoneRecidencia: '',
  telefoneComercial: '',
  permiteSms: true,
  email: 'meu@email.com',
  emailAlternativo: '',
  plano: 'pré-pago manual - cartão de crédito',
  autorizaNfe: false,
  formaEnvioExtrato: 'site',
};

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private clienteSubject!: BehaviorSubject<ClienteInterface>;

  public clienteAtual: Observable<ClienteInterface>;

  constructor(
    private cryptografyService: CryptografyService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.hasCurrentClient();
    this.clienteAtual = this.clienteSubject.asObservable();
  }

  public identify(value: number): Observable<ClienteInterface> | null {
    if (
      value === cliente.cpf ||
      value === cliente.id ||
      value === cliente.cnpj
    ) {
      this.clienteSubject.next(cliente);
      this.localStorageService.save('clienteAtual', JSON.stringify(cliente));
      return of(cliente);
    }

    return null;
  }

  private hasCurrentClient(): void {
    var user = localStorage.getItem('clienteAtual') ?? null;

    if (user) {
      this.clienteSubject = new BehaviorSubject<ClienteInterface>(
        JSON.parse(
          this.cryptografyService.decrypt(localStorage.getItem('clienteAtual'))
        )
      );
    } else {
      this.clienteSubject = new BehaviorSubject<ClienteInterface>(null!);
    }
  }

  public closeService(): void {
    try {
      localStorage.removeItem('clienteAtual');
      this.clienteSubject.next(null!);
      this.router.navigate([RouterEnum.HOME]);
    } catch (error) {
      console.log('ERRO = > não foi possivél encerrar a sessão: ', error);
    }
  }

  public get userValue(): any {
    return this.clienteSubject.value;
  }
}
