import { Component, Input, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/notification.service';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css'],
})
export class ListaFilmesComponent implements OnInit {
  constructor(
    private FilmeService: FilmeService,
    private NotificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  onRemove(index: number) {
    this.FilmeService.Delete(index).subscribe(() => {
      this.loadData();
      this.NotificationService.sendMessage('O filme foi excluido com sucesso!');
    });
  }

  loadData() {
    this.FilmeService.getAll().subscribe((filme) => {
      this.filmes = filme;
    });
  }

  @Input() filmes: any;
}
