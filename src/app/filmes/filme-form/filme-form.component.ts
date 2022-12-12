import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Iator } from './../../atores/ator.model';
import { AtorService } from 'src/app/atores/ator.service';
import { primeiraLetra } from 'src/app/customvalidator/customvalidator';
import { GeneroService } from 'src/app/generos/genero.service';
import { Igenero } from 'src/app/generos/generos.model';
import { filmeDTO } from '../filme.model';
import { CinemaService } from 'src/app/cinemas/cinema.service';
import { Icinema } from 'src/app/cinemas/cinema.model';

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css'],
})
export class FilmeFormComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private GeneroService: GeneroService,
    private AtorService: AtorService,
    private CinemaService: CinemaService
  ) {}

  form: any;

  @Input() modelo: any;

  @Output() onSalvarMudancas = new EventEmitter<filmeDTO>();

  generosNaoSelecionados: Igenero[] = [];

  generosSelecionados: Igenero[] = [];

  cinemasNaoSelecionados: Icinema[] = [];

  cinemasSelecionados: Icinema[] = [];

  AtoresNaoSelecionados: Iator[] = [];

  AtoresSelecionados: Iator[] = [];

  salvarMudancas() {
    const generosId = this.generosSelecionados;
    this.form.get('generos').setValue(generosId);

    const cinemasId = this.cinemasSelecionados;
    this.form.get('cinemas').setValue(cinemasId);

    const AtoresId = this.AtoresSelecionados;
    this.form.get('atores').setValue(AtoresId);

    this.onSalvarMudancas.emit(this.form.value);
  }

  mensagemErro() {
    if (this.form.get('nome').hasError('required'))
      return 'É necessario inserir um valor!';
    if (this.form.get('nome').hasError('primeiraLetra'))
      return this.form.get('nome').getError('primeiraLetra').message;
    return '';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', { validators: [Validators.required, primeiraLetra()] }],
      noCinema: false,
      dataDeLancamento: '',
      foto: '',
      atores: [],
      generos: [],
      cinemas: [],
    });

    this.CinemaService.getAll().subscribe((cinema) => {
      this.cinemasNaoSelecionados = cinema;
    });

    this.GeneroService.getAll().subscribe((genero) => {
      this.generosNaoSelecionados = genero;
    });

    this.AtorService.getAll().subscribe((ator) => {
      this.AtoresNaoSelecionados = ator;
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
}
