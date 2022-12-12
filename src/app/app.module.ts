import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './utilidades/message/message.component';
import { FilmesModule } from './filmes/filmes.module';
import { TransitivoModule } from './transitivo/transitivo.module';
import { GenerosModule } from './generos/generos.module';

@NgModule({
  declarations: [AppComponent, MenuComponent, MessageComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FilmesModule,
    TransitivoModule,
    GenerosModule,
  ],
})
export class AppModule {}
