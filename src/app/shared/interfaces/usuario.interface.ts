import { PerfilEnum } from '../_index';

export class UsuarioInterface {
  'id'?: number;
  'usuario'?: string;
  'senha'?: string;
  'primeiroNome'?: string;
  'sobrenome'?: string;
  'token'?: string;
  'perfil'?: PerfilEnum;
}
