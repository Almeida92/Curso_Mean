import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRoutes } from './rotas/app.routes';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { VerificaCh } from './filters/verificarch.filter';
import { SubLista } from './filters/sublista.filter';

// usando as rotas
import { LogoComponent } from './logo/logo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListaComponent } from './lista/lista.component';
import { NotFoundComponent } from './erro/erro.notfound.component';
import { MasterDetailComponent } from './masterdetail/masterdetail.component';
import { MasterDetailDbComponent } from './masterdetail/masterdetaildb.component';

// Services
import { CursosService } from './services/cursos.service';

@NgModule({
  declarations: [
    AppComponent, // componentes, Pipes, Filters usados na aplicação
    MenuComponent,
    LogoComponent,
    CadastroComponent,
    ListaComponent,
    NotFoundComponent,
    MasterDetailComponent,
    VerificaCh,
    SubLista,
    MasterDetailDbComponent
  ],
  imports: [
    BrowserModule, // módulos usados na aplicação
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent] // Indica qual o componente inicial da aplicação
})
export class AppModule { }
