import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificacaoService {
  public isNotificacao: boolean = false;

  constructor() {}

  public dismissAll() {
    this.isNotificacao = false;
  }
}
