import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent // componentes usados na aplicação
  ],
  imports: [
    BrowserModule // módulos usados na aplicação
  ],
  providers: [],
  bootstrap: [AppComponent] // Inicio da aplicação
})
export class AppModule { }
