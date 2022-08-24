import { DispositivoInterface } from './dispositivo.interface';
import { PerfilInterface } from './perfil.interface';

export class SubmenuInterface {
  'nome': string;
  'url': string;
  'perfil': PerfilInterface[];
  'dispositivo': DispositivoInterface[];
}
