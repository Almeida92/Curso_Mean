import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: 'views/menu.component.html'
})
export class MenuComponent {
    titulo_escola: string = 'Impacta Treinamentos';
    titulo_cad: string = 'Cadastro de Cursos';
    titulo_lista = 'Listagem de cursos';
 }