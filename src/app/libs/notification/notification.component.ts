import { Component, Input, OnInit } from '@angular/core';
import { NotificationInterface, NotificationService } from '@app/shared/_index';
import { NotificationEnum } from '../../shared/enums/notification.enum';

@Component({
  selector: 'ftc-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() content!: NotificationInterface;

  public notification!: NotificationInterface;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.open();
  }

  private open() {
    this.notificationService.dismissAll();

    this.notification = {
      type: this.content.type,
      text: this.content.text,
      title: this.content.title,
    };

    setTimeout(() => {
      this.notificationService.dismissAll();
    }, 5000);
  }

  public dismissAll() {
    // this.notification = null;
  }
}
