class Pessoa {
    static total: number = 0;

    constructor(protected nome:string, protected idade: number) {
        Pessoa.total += 1;
    }
}

class Aluno extends Pessoa {
    private curso: string;

    constructor(curso: string, nome: string, idade: number) {
        super(nome, idade);
    }
    
    public  setCurso(curso: string): void {
        this.curso = curso;
    }

    public getCurso(): string {
        return this.nome;
    }
}

interface IPonto {
    x: number;
    y: number;

    isQuadrado(): boolean;
}

class Ponto implements IPonto {
    x: number;
    y: number;

    isQuadrado(): boolean {
        return this.x == this.y;
    }  
}

class Teste {
    public testar():void {
        let aluno = new Aluno("Angular4", "Felipe", 25);
        aluno.setCurso("Mean");

        let ponto = new Ponto;
        ponto.x = 10;
        ponto.y = 10;

        console.log(ponto.isQuadrado() ? "É quadrado": "Não é quadrado");
    }
}