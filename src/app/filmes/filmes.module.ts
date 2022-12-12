import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FilmesRoutingModule } from './filmes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TransitivoModule } from '../transitivo/transitivo.module';

import { CriarFilmesComponent } from './criar-filmes/criar-filmes.component';
import { EditarFilmeComponent } from './editar-filme/editar-filme.component';
import { FiltroFilmeComponent } from './filtro-filme/filtro-filme.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmeFormComponent } from './filme-form/filme-form.component';

@NgModule({
  declarations: [
    CriarFilmesComponent,
    EditarFilmeComponent,
    FiltroFilmeComponent,
    ListaFilmesComponent,
    FilmeFormComponent,
  ],
  imports: [
    CommonModule,
    FilmesRoutingModule,
    MaterialModule,
    TransitivoModule,
    ReactiveFormsModule,
  ],
  exports: [ListaFilmesComponent],
})
export class FilmesModule {}
