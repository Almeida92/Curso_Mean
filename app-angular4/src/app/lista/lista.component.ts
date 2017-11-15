import { Component } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Component({
   templateUrl: './views/lista.component.html'
})
export class ListaComponent {
    // definindo um array de cursos
    public listaCursos: ICurso[] = [
        {codigo:11, descricao: 'Asp.Net', ch:40},
        {codigo:12, descricao: 'Java Programmer', ch:40},
        {codigo:13, descricao: 'C# Fundamentos', ch:60},
        {codigo:14, descricao: 'Lógica de Programação', ch:24},
    ];
}