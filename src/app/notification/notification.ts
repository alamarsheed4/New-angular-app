import { Component, inject } from '@angular/core';
import { NotificationService } from '../services/notifications/notification-service';
import { NotificationLogService } from '../services/notifications/notification-log';

@Component({
  imports: [],
  selector: 'app-notification',
  styleUrl: './notification.css',
  templateUrl: './notification.html',
})
export class NotificationComponent {


  notificationService=inject(NotificationService); //new Email Notification

  notificationLogService = inject(NotificationLogService)

}
