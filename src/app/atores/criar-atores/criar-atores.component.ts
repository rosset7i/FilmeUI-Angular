import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { AtorService } from './../ator.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-criar-atores',
  templateUrl: './criar-atores.component.html',
  styleUrls: ['./criar-atores.component.css'],
})
export class CriarAtoresComponent implements OnInit {
  constructor(
    private AtorService: AtorService,
    private Router: Router,
    private NotificationService: NotificationService
  ) {}

  salvarMudancas(event: any) {
    this.AtorService.Post(event).subscribe(() => {
      this.Router.navigate(['/atores']);
      this.NotificationService.sendMessage('O ator foi criado com sucesso');
    });
  }

  ngOnInit(): void {}
}
