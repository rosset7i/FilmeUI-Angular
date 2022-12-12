import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { primeiraLetra } from 'src/app/customvalidator/customvalidator';
import { generoDTO } from './../generos.model';

@Component({
  selector: 'app-form-genero',
  templateUrl: './form-genero.component.html',
  styleUrls: ['./form-genero.component.css'],
})
export class FormGeneroComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: any;

  @Input() modelo: any;

  @Output() onSalvarMudancas: EventEmitter<generoDTO> =
    new EventEmitter<generoDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', { validators: [Validators.required, primeiraLetra()] }],
    });

    if (this.modelo != undefined) this.form.patchValue(this.modelo);
  }
  salvarMudancas() {
    this.onSalvarMudancas.emit(this.form.value);
  }

  mensagemErro() {
    if (this.form.get('nome').hasError('required'))
      return 'É necessario inserir um valor!';
    if (this.form.get('nome').hasError('primeiraLetra'))
      return this.form.get('nome').getError('primeiraLetra').message;
    return '';
  }
}
