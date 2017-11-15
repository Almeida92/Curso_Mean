import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';
import { CursosService} from '../services/cursos.service';

@Component({
   templateUrl: './views/lista.component.html'
})
export class ListaComponent {
    public listaCursos: ICurso[];

    constructor(cursosService: CursosService) {
        this.listaCursos = cursosService.getListaCursos();
    }
}