import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
    templateUrl: './views/cadastro.component.html'
})
export class CadastroComponent {
    // simulação: definindo apenas um curso
    public curso: ICurso = {
        codigo: 10,
        descricao: 'Nodejs',
        ch: 24
    };
}