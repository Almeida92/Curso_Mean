import { Routes } from '@angular/router';

import { LogoComponent } from '../logo/logo.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { ListaComponent } from '../lista/lista.component';
import { NotFoundComponent } from '../erro/erro.notfound.component';
import { MasterDetailComponent } from '../masterdetail/masterdetail.component';
import { MasterDetailDbComponent } from '../masterdetail/masterdetaildb.component';

export const appRoutes: Routes = [
    { path: '', component: LogoComponent},
    { path: 'cadastro', component: CadastroComponent },
    { path: 'lista', component: ListaComponent},
    { path: 'masterdetail', component: MasterDetailComponent},
    { path: 'masterdetaildb', component: MasterDetailDbComponent},
    { path: '**', component: NotFoundComponent}
];