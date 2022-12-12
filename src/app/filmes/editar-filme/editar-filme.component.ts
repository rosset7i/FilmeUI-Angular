import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FilmeService } from '../filme.service';
import { NotificationService } from 'src/app/notification.service';
import { filmeDTO } from '../filme.model';

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.css'],
})
export class EditarFilmeComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private FilmeService: FilmeService,
    private Router: Router,
    private NotificationService: NotificationService
  ) {}

  modelo: any;

  salvarMudancas(filmeDTO: filmeDTO) {
    this.FilmeService.Put(this.modelo.id, filmeDTO).subscribe(() => {
      this.NotificationService.sendMessage('O filme foi editado com sucesso!');
      this.Router.navigate(['/']);
    });
  }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((params) => {
      this.FilmeService.getId(params.id).subscribe((filme) => {
        this.modelo = filme;
      });
    });
  }
}
