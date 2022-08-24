import { TipoCadastroEnum } from '../_index';

export class ClienteInterface {
  'id': number;
  'codigo': number;
  'primeiroNome': string;
  'sobrenome': string;
  'tipoCadastro': TipoCadastroEnum;
  'dataNascimento'?: string;
  'rg'?: number;
  'cpf'?: number;
  'cnpj'?: number;
  'cep': number;
  'lagradouro': string;
  'numero': number;
  'bairro': string;
  'complemento'?: string;
  'cidade': string;
  'estado': string;
  'enderecoCorrespondencia': boolean;
  'celular': string;
  'celularAlternativo'?: string;
  'telefoneRecidencia'?: string;
  'telefoneComercial'?: string;
  'permiteSms': boolean;
  'email': string;
  'emailAlternativo'?: string;
  'plano': string;
  'autorizaNfe': boolean;
  'formaEnvioExtrato': string;
}
