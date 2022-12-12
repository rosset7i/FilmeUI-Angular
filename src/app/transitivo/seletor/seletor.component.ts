import { seletorDTO } from './filme.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css'],
})
export class SeletorComponent implements OnInit {
  constructor() {}

  @Input() itensSelecionados: any;

  @Input() itensNaoSelecionados: any;

  select(item: seletorDTO, index: number) {
    this.itensSelecionados.push(item);
    this.itensNaoSelecionados.splice(index, 1);
  }

  deselect(item: seletorDTO, index: number) {
    this.itensNaoSelecionados.push(item);
    this.itensSelecionados.splice(index, 1);
  }

  selecionarTodos() {
    this.itensSelecionados.push(...this.itensNaoSelecionados);
    this.itensNaoSelecionados = [];
  }
  deselecionarTodos() {
    this.itensNaoSelecionados.push(...this.itensSelecionados);
    this.itensSelecionados = [];
  }

  ngOnInit(): void {}
}
