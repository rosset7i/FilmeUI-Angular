import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { atorDTO } from '../ator.model';
import { primeiraLetra } from 'src/app/customvalidator/customvalidator';

@Component({
  selector: 'app-form-ator',
  templateUrl: './form-ator.component.html',
  styleUrls: ['./form-ator.component.css'],
})
export class FormAtorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: any;

  @Input() modelo: any;

  @Output() onSalvarMudancas = new EventEmitter<atorDTO>();

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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', { validators: [Validators.required, primeiraLetra()] }],
      dataDeNascimento: Date,
      foto: '',
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
}
