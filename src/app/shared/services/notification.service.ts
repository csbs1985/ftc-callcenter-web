import { Injectable } from '@angular/core';
import { NotificationInterface } from '../_index';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notification?: NotificationInterface;

  constructor() {}

  public dismissAll() {
    this.notification = undefined;
  }
}
