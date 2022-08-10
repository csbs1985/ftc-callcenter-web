import { DevicesInterface } from './devices.interface';
import { profilesInterface } from './profiles.interface';
import { SubmenuInterface } from './submenu.interface';

export class MenuModel {
  'name': string;
  'submenu': SubmenuInterface[];
  'requiredService': boolean;
  'profiles': profilesInterface[];
  'devices': DevicesInterface[];
}
