import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent, // componentes usados na aplicação
    MenuComponent
  ],
  imports: [
    BrowserModule // módulos usados na aplicação
  ],
  providers: [],
  bootstrap: [AppComponent] // Indica qual o componente inicial da aplicação
})
export class AppModule { }
