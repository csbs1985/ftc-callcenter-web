import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NotificacaoInterface, NotificacaoService } from '@app/shared/_index';

@Component({
  selector: 'ftc-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() content!: NotificacaoInterface;

  public notification!: NotificacaoInterface;

  constructor(private notificacaoService: NotificacaoService) {}

  ngOnInit() {
    this.open();
  }

  ngOnDestroy() {
    this.notificacaoService.dismissAll();
  }

  private open() {
    this.notification = this.content;

    setTimeout(() => {
      this.notificacaoService.dismissAll();
    }, 5000);
  }
}
