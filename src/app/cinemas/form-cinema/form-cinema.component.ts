import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { cinemaDTO } from '../cinema.model';

@Component({
  selector: 'app-form-cinema',
  templateUrl: './form-cinema.component.html',
  styleUrls: ['./form-cinema.component.css'],
})
export class FormCinemaComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: any;

  @Input() modelo: any;

  @Output() onSalvarMudancas = new EventEmitter<cinemaDTO>();

  salvarMudancas() {
    this.onSalvarMudancas.emit(this.form.value);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', { validators: [Validators.required] }],
    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
}
