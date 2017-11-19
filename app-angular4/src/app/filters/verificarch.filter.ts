import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'verificaCh'
})
export class VerificaCh implements PipeTransform {
    transform(valor: Number) : string {
        if (valor < 40 ) {
            return 'Carga Horária baixa';
        } else if (valor >= 40 && valor < 60) {
            return 'Carga Horária regular';
        } else {
            return 'Carga Horária alta';
        }
    }
}