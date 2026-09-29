import { Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class NotificationLogService{

    notifications = signal<string[]>([]);

    addNotification(newNotification:string){
        this.notifications.update(items => [newNotification, ...items]);
    }
}