import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pregunta1Component } from './examen/pregunta1/pregunta1.component';
import { Pregunta2Component } from './examen/pregunta2/pregunta2.component';
import { Pregunta3Component } from './examen/pregunta3/pregunta3.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Pregunta1Component,
    Pregunta2Component,
    Pregunta3Component

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 