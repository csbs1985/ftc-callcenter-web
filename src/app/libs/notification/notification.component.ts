import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NotificationInterface, NotificationService } from '@app/shared/_index';

@Component({
  selector: 'ftc-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit, OnDestroy {
  @Input() content!: NotificationInterface;

  public notification!: NotificationInterface;

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.open();
  }

  ngOnDestroy() {
    this.notificationService.dismissAll();
  }

  private open() {
    this.notification = this.content;

    setTimeout(() => {
      this.notificationService.dismissAll();
    }, 5000);
  }
}
