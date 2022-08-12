import { ProfilesEnum } from '../enums/_index';
export class UserInterface {
  'id'?: number;
  'username'?: string;
  'password'?: string;
  'firstName'?: string;
  'lastName'?: string;
  'token'?: string;
  'profile'?: ProfilesEnum;
}
