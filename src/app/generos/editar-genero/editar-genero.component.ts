import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/notification.service';
import { GeneroService } from './../genero.service';
import { generoDTO } from './../generos.model';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css'],
})
export class EditarGeneroComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private GeneroService: GeneroService,
    private Router: Router,
    private NotificationService: NotificationService
  ) {}

  modelo: any;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.GeneroService.getId(params.id).subscribe((genero) => {
        this.modelo = genero;
      });
    });
  }

  salvarMudancas(generoDTO: generoDTO) {
    this.GeneroService.Put(this.modelo.id, generoDTO).subscribe(() => {
      this.NotificationService.sendMessage('O genero foi editado com sucesso!');
      this.Router.navigate(['/generos']);
    });
  }
}
