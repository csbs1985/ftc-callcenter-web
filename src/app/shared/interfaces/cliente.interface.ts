import { TipoCadastroEnum } from '../_index';

export class ClienteInterface {
  'id': string;
  'codigo': string;
  'primeiroNome': string;
  'sobrenome': string;
  'tipoCadastro': TipoCadastroEnum;
  'dataNascimento'?: string;
  'rg'?: string;
  'cpfCnpj'?: string;
  'cep': string;
  'lagradouro': string;
  'numero': string;
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
