import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FilmeService } from '../filme.service';
import { NotificationService } from 'src/app/notification.service';
import { filmeDTO } from '../filme.model';

@Component({
  selector: 'app-criar-filmes',
  templateUrl: './criar-filmes.component.html',
  styleUrls: ['./criar-filmes.component.css'],
})
export class CriarFilmesComponent implements OnInit {
  constructor(
    private FilmeService: FilmeService,
    private Router: Router,
    private NotificationService: NotificationService
  ) {}

  salvarMudancas(event: filmeDTO) {
    this.FilmeService.Post(event).subscribe(() => {
      this.NotificationService.sendMessage('O filme foi criado com sucesso!');
      this.Router.navigate(['/']);
    });
  }

  ngOnInit(): void {}
}
