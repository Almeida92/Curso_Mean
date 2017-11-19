import { Injectable } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/Rx'

@Injectable()
export class CursosService {
    //acesso ao HTTP

    constructor (private _http: Http) {}

    private url = "http://localhost:7628/api/cursos";

    public getCursos(): Observable<ICurso[]> {
        return this._http.get(this.url)
            .map(res => res.json());
    }
    public getListaCursos(): ICurso[] {
        return [
            {codigo:11, descricao: 'Asp.Net', ch:40},
            {codigo:12, descricao: 'Java Programmer', ch:40},
            {codigo:13, descricao: 'C# Fundamentos', ch:60},
            {codigo:14, descricao: 'Lógica de Programação', ch:24},
        ];
    }
}
