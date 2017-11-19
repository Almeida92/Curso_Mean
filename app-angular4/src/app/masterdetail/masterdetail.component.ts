import { CursosService } from './../services/cursos.service';
import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    templateUrl: './views/masterdetail.component.html'
})
export class MasterDetailComponent {

    //para um curso selecionado
    public cursoSelecionado: ICurso;

    public selecionar(item: ICurso): void {
        this.cursoSelecionado = item;
    }

    public listaCursos: ICurso[];
    constructor(cursosService: CursosService) {
        this.listaCursos = cursosService.getListaCursos();
    }
}