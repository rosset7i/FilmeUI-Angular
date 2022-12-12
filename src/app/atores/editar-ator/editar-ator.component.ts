import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotificationService } from './../../notification.service';
import { AtorService } from './../ator.service';
import { atorDTO } from './../ator.model';

@Component({
  selector: 'app-editar-ator',
  templateUrl: './editar-ator.component.html',
  styleUrls: ['./editar-ator.component.css'],
})
export class EditarAtorComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private AtorService: AtorService,
    private Router: Router,
    private NotificationService: NotificationService
  ) {}

  modelo: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.AtorService.getId(params.id).subscribe((ator) => {
        this.modelo = ator;
      });
    });
  }

  salvarMudancas(atorDTO: atorDTO) {
    this.AtorService.Put(this.modelo.id, atorDTO).subscribe(() => {
      this.NotificationService.sendMessage('O ator foi editado com sucesso!');
      this.Router.navigate(['/atores/']);
    });
  }
}
