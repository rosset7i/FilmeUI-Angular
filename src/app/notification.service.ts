import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  subject = new Subject<string>();

  sendMessage(message: string) {
    this.subject.next(message);
  }

  getMessage(): Observable<string> {
    return this.subject.asObservable();
  }
}
