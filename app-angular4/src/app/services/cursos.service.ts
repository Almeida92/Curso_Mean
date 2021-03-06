import { Injectable } from '@angular/core';
import { ICurso } from '../classes/interface.curso';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/RX';
import 'rxjs/Rx';

@Injectable()
export class CursosService {
    //acesso ao HTTP
    constructor (private _http: Http) {}

    private url = "http://localhost:7628/api/cursos";

    private handleError(error: Response): Observable<ICurso[]> {
        const conteudo = error.json();
        const erro = conteudo.error || JSON.stringify(conteudo) ;

        let msgErro = `Codigo: ${error.status} - Descrição ${erro}`;

        return Observable.throw(msgErro);
    }

    public getCursos(): Observable<ICurso[]> {
        return this._http.get(this.url)
            .map(res => res.json())
            .catch(this.handleError);
    }

    public setCurso(curso: ICurso): Observable<ICurso> {
        let header = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: header});
        let json = JSON.stringify({
            codigo: curso.codigo,
            descricao: curso.descricao,
            ch: curso.ch
        });

        return this._http.post(this.url, json, options).map(res => res.json());
    }

    // acesso ao mondodb
    private urldb = 'http://localhost:3200/cursos';

    public getCursosDb(): Observable<ICurso[]> {
        return this._http.get(this.urldb)
            .map(res => res.json())
            .catch(this.handleError);
    }

    public setCursoDb(curso: ICurso): Observable<ICurso> {
        let header = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers: header});
        let json = JSON.stringify({
            codigo: curso.codigo,
            descricao: curso.descricao,
            ch: curso.ch
        });

        return this._http.post(this.urldb, json, options).map(res => res.json());
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
