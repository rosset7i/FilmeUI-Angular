import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { FilmeService } from '../filme.service';
import { Ifilme } from '../filme.model';

@Component({
  selector: 'app-filtro-filme',
  templateUrl: './filtro-filme.component.html',
  styleUrls: ['./filtro-filme.component.css'],
})
export class FiltroFilmeComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private FilmeService: FilmeService
  ) {}

  form: any;

  filmesLista: Ifilme[] = [];

  filmes = this.filmesLista;

  clearButton() {
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: '',
      generoId: 0,
      lancamento: false,
      emCartaz: false,
    });

    this.FilmeService.getAll().subscribe((filme) => {
      this.filmesLista = filme;
      this.filmes = filme;
    });

    this.form.valueChanges.subscribe((valor: any) => {
      this.filmesLista = this.filmes;
      this.filtrarFilmes(valor);
    });
  }

  filtrarFilmes(valor: any) {
    if (valor.nome) {
      this.filmesLista = this.filmesLista.filter(
        (filme) => filme.nome.indexOf(valor.nome) !== -1
      );
    }
  }
}
