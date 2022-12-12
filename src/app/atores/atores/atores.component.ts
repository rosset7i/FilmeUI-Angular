import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'src/app/notification.service';
import { Iator } from './../ator.model';
import { AtorService } from './../ator.service';

@Component({
  selector: 'app-atores',
  templateUrl: './atores.component.html',
  styleUrls: ['./atores.component.css'],
})
export class AtoresComponent implements OnInit {
  constructor(
    private AtorService: AtorService,
    private NotificationService: NotificationService
  ) {}

  atorAr: Iator[] = [];

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.AtorService.getAll().subscribe((atores) => {
      this.atorAr = atores;
    });
  }

  colunas = ['nome', 'acoes'];

  delete(id: number) {
    this.AtorService.Delete(id).subscribe(() => {
      this.loadData();
      this.NotificationService.sendMessage('O ator foi excluido com sucesso!');
    });
  }
}
