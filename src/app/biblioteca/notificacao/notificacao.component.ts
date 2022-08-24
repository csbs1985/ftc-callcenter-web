import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import {
  NotificacaoInterface,
  NotificacaoService,
} from '@app/compartilhar/_index';

@Component({
  selector: 'ftc-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss'],
})
export class NotificacaoComponent implements OnInit, OnDestroy {
  @Input() content!: NotificacaoInterface;

  public notificacao!: NotificacaoInterface;

  constructor(private notificacaoService: NotificacaoService) {}

  ngOnInit() {
    this.open();
  }

  ngOnDestroy() {
    this.notificacaoService.dismissAll();
  }

  private open() {
    this.notificacao = this.content;

    setTimeout(() => {
      this.notificacaoService.dismissAll();
    }, 5000);
  }
}
