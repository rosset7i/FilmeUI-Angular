import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/notification.service';
import { Igenero } from './../generos.model';
import { GeneroService } from './../genero.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css'],
})
export class GenerosComponent implements OnInit {
  constructor(
    private GeneroService: GeneroService,
    private NotificationService: NotificationService
  ) {}

  generosAr: Igenero[] = [];

  colunas = ['nome', 'acoes'];

  ngOnInit(): void {
    this.carregarGeneros();
  }

  carregarGeneros() {
    this.GeneroService.getAll().subscribe((generos) => {
      this.generosAr = generos;
    });
  }

  delete(id: number) {
    this.GeneroService.Delete(id).subscribe(() => {
      this.carregarGeneros();
      this.NotificationService.sendMessage(
        'O genero foi excluido com sucesso!'
      );
    });
  }
}
