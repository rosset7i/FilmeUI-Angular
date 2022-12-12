import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/notification.service';
import { CinemaService } from './../cinema.service';
import { Icinema } from './../cinema.model';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css'],
})
export class CinemasComponent implements OnInit {
  constructor(
    private CinemaService: CinemaService,
    private NotificationService: NotificationService
  ) {}
  cinemaAr: Icinema[] = [];

  colunas = ['nome', 'acoes'];

  ngOnInit(): void {
    this.carregarCinema();
  }

  carregarCinema() {
    this.CinemaService.getAll().subscribe((cinema) => {
      this.cinemaAr = cinema;
    });
  }

  delete(id: number) {
    this.CinemaService.Delete(id).subscribe(() => {
      this.carregarCinema();
      this.NotificationService.sendMessage('O cinema foi excluido com sucesso');
    });
  }
}
