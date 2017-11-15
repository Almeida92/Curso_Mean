import { Routes } from '@angular/router';

import { LogoComponent } from '../logo/logo.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ListaComponent } from '../lista/lista.component';
import { NotFoundComponent } from '../erro/erro.notfound.component';

export const appRoutes: Routes = [
    { path: '', component: LogoComponent},
    { path: 'cadastro', component: CadastroComponent },
    { path: 'lista', component: ListaComponent},
    { path: '**', component: NotFoundComponent}
];