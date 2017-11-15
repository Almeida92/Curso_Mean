import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { appRoutes } from './rotas/app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

// usando as rotas
import { LogoComponent } from './logo/logo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { NotFoundComponent } from './erro/erro.notfound.component';

@NgModule({
  declarations: [
    AppComponent, // componentes usados na aplicação
    MenuComponent,
    LogoComponent,
    CadastroComponent,
    ListaComponent,
    NotFoundComponent],
  imports: [
    BrowserModule, // módulos usados na aplicação
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent] // Indica qual o componente inicial da aplicação
})
export class AppModule { }
