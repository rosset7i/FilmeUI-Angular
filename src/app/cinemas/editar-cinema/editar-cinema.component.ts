import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { cinemaDTO } from '../cinema.model';
import { NotificationService } from 'src/app/notification.service';
import { CinemaService } from './../cinema.service';

@Component({
  selector: 'app-editar-cinema',
  templateUrl: './editar-cinema.component.html',
  styleUrls: ['./editar-cinema.component.css'],
})
export class EditarCinemaComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private CinemaService: CinemaService,
    private Router: Router,
    private NotificationService: NotificationService
  ) {}

  modelo: any;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.CinemaService.getId(params.id).subscribe((cinema) => {
        this.modelo = cinema;
      });
    });
  }

  salvarMudancas(cinemaDTO: cinemaDTO) {
    this.CinemaService.Put(this.modelo.id, cinemaDTO).subscribe(() => {
      this.NotificationService.sendMessage('O cinema foi editado com sucesso!');
      this.Router.navigate(['/cinemas']);
    });
  }
}
