import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CinemaService } from '../cinema.service';
import { NotificationService } from 'src/app/notification.service';
import { cinemaDTO } from './../cinema.model';

@Component({
  selector: 'app-criar-cinemas',
  templateUrl: './criar-cinemas.component.html',
  styleUrls: ['./criar-cinemas.component.css'],
})
export class CriarCinemasComponent implements OnInit {
  constructor(
    private router: Router,
    private cinema: CinemaService,
    private NotificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  salvarMudancas(cinema: cinemaDTO) {
    this.cinema.Post(cinema).subscribe(() => {
      this.router.navigate(['/cinemas/']);
      this.NotificationService.sendMessage('O cinema foi criado com sucesso');
    });
  }
}
