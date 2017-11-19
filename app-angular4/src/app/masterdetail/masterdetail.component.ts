import { CursosService } from './../services/cursos.service';
import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    templateUrl: './views/masterdetail.component.html'
})
export class MasterDetailComponent {

    //para um curso selecionado
    public cursoSelecionado: ICurso;
    private novoCurso: ICurso;

    public selecionar(item: ICurso): void {
        this.cursoSelecionado = item;
    }

    public listaCursos: ICurso[];
    constructor(cursosService: CursosService) {
        cursosService.getCursos()
            .subscribe(res => this.listaCursos = res,
                error => alert(error),
                () => console.log('Finalizado'));
    }

    // para a inclusao de um novo curso
    public novo(): void {
        this.novoCurso = {codigo:0, descricao: '', ch:0 };
        this.cursoSelecionado = this.novoCurso;
    }

    public incluir(curso: ICurso): void {
        this.listaCursos.push(curso);
        alert('Curso incluído com sucesso');
    }
}