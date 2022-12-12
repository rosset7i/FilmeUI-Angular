import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  constructor(
    private NotificationService: NotificationService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.NotificationService.getMessage().subscribe((msg) => {
      this._snackBar.open(msg, 'Fechar');
    });
  }
}
