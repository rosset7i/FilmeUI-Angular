import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationService } from 'src/app/notification.service';
import { GeneroService } from './../genero.service';
import { generoDTO } from './../generos.model';

@Component({
  selector: 'app-criar-genero',
  templateUrl: './criar-genero.component.html',
  styleUrls: ['./criar-genero.component.css'],
})
export class CriarGeneroComponent implements OnInit {
  constructor(
    private router: Router,
    private genero: GeneroService,
    private NotificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  salvarMudancas(generoDTO: generoDTO) {
    this.genero.Post(generoDTO).subscribe(
      () => {
        this.router.navigate(['/generos']);
        this.NotificationService.sendMessage(
          'O genero foi criado com sucesso!'
        );
      },
      (erro) => console.log(erro)
    );
  }
}
