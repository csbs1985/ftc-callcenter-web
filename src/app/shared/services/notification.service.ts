import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public isNotification: boolean = false;

  constructor() {}

  public dismissAll() {
    this.isNotification = false;
  }
}
