import { ICurso } from './../classes/interface.curso';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform {
    transform(cursos: ICurso[], input: string): ICurso[] {
        return cursos.filter(curso => curso.descricao.toLowerCase().includes(input.toLocaleLowerCase()));
    }
}