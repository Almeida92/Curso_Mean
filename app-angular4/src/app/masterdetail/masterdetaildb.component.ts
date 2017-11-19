import { CursosService } from './../services/cursos.service';
import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    templateUrl: './views/masterdetaildb.component.html'
})
export class MasterDetailDbComponent {

    //para um curso selecionado
    public cursoSelecionado: ICurso;
    private novoCurso: ICurso;

    public selecionar(item: ICurso): void {
        this.cursoSelecionado = item;
    }

    public listaCursos: ICurso[];
    constructor(private cursosService: CursosService) {
        this.listar();
    }

    public listar():void {
        this.cursosService.getCursosDb()
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
        this.cursosService.setCursoDb(curso)
            .subscribe(res => JSON.stringify(res),
            error => alert(error),
            () => this.listar());
            
        alert('Curso incluído com sucesso');
    }
}