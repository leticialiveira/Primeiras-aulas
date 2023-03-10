//  Colocando valores nos atributos:

class Quadrado {
    constructor(base, altura){
        this.base = base;
        this.altura = altura
    }
}

const quadrado = new Quadrado(3,4)
console.log(quadrado);
const quadrado2 = new Quadrado(5,6)
console.log(quadrado2);

// para nao ocorrer o erro de alguem colocar uma string, sendo que 
// 'queremos' nuemros é só usar um if com o isNaN(verifica se é um numero)

class Retangulo {
    constructor(base,altura){
        if(isNaN(base)|| isNaN(altura)) throw new Error('Base e altura precisam ser um valor em numeros')  
        // throw serve pra colocar uma exceção ( algo inesperado aconteceu )
            this.base = base
            this.altura = altura
    }
}

const retangulo1 = new Retangulo(1,6)
console.log(retangulo1);
// const retangulo2 = new Retangulo('aa',6)

//  Podemos ter atributos opcionais em uma classe, onde o usuario pode passar o valor que
// que quiser, sem restrições

class Triangulo {
    constructor(base,altura){
        if(isNaN(base)|| isNaN(altura)) throw new Error('Base e altura precisam ser um valor em numeros')  
        this.base = base
        this.altura = altura
        this.cor = undefined
    }
}
const triangulo1 = new Triangulo(3,4)
console.log(triangulo1);
triangulo1.color = 'azul'
console.log(triangulo1);
