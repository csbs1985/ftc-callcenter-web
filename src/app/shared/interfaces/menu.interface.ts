import { DispositivoInterface } from './dispositivo.interface';
import { PerfilInterface } from './perfil.interface';
import { SubmenuInterface } from './submenu.interface';

export class MenuInterface {
  'nome': string;
  'submenu': SubmenuInterface[];
  'atendimentoAtivo': boolean;
  'perfil': PerfilInterface[];
  'dispositivo': DispositivoInterface[];
}
