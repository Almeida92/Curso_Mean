import { Injectable } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

@Injectable()
export class CursosService {
    public getListaCursos(): ICurso[] {
        return [
            {codigo:11, descricao: 'Asp.Net', ch:40},
            {codigo:12, descricao: 'Java Programmer', ch:40},
            {codigo:13, descricao: 'C# Fundamentos', ch:60},
            {codigo:14, descricao: 'Lógica de Programação', ch:24},
        ];
    }
}
