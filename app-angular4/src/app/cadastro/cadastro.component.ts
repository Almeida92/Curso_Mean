import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    template: `
        <div class="container margem"> 
            <h1> CADASTRO DE CURSOS</h1>
            <h3>Código: {{ curso.codigo }}</h3>
            <h3>Descrição: {{ curso.descricao }}</h3>
            <h3>Carga Horária: {{ curso.ch }}</h3>
        </div>
    `
})
export class CadastroComponent {
    // simulação: definindo apenas um curso
    public curso: ICurso = {
        codigo: 10,
        descricao: 'Nodejs',
        ch: 24
    };
}