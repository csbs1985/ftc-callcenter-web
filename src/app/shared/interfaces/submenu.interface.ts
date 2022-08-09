import { DevicesInterface } from './devices.interface';
import { profilesInterface } from './profiles.interface';

export class SubmenuInterface {
  'name': string;
  'url': string;
  'profiles': profilesInterface[];
  'devices': DevicesInterface[];
}
