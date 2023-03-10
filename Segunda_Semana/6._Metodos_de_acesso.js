//  Métodos que permitem a leitura e/ou escrita de atributos privados.

// Propriedade é um atributo que tem métodos de acesso, ou seja, ela 
// pertence ao objeto e tem seu acesso restrito por métodos (Accessors)

class Quadrado{
    constructor(lado,altura){
        this._cor = 'blue'
        this.lado = lado
        this.altura = altura
    }
    get cor(){return this._cor}
    set cor(cor){return this._cor = cor}
}

const quadrado = new Quadrado(3,4)
console.log(quadrado);
console.log(quadrado._cor);
quadrado._cor = 'red'
console.log(quadrado._cor);

// Mais um exemplo usando POO (permitem a aplicação de tudo o que ja
// fizemos em lógica de programação.), nesse exemplo limitando a mudança 
// de cores sem seguir um determinado padrão.

class Retangulo{
    constructor(base,altura){
        if(isNaN(base)|| isNaN(altura)) throw new Error("Base e altura precisam ter valores em numeros")
        this.base = base
        this.altura = altura
        this._cor = undefined
    }
    get cor() {return this._cor}
    set cor(cor) {
        if (cor !== 'blue' && cor !== 'red' && cor !== 'green'){
            throw new Error('O valor da propriedade precisa ser "red", "green" ou "blue"')
        }    
        this._cor = cor
    }
}

const retangulo = new Retangulo(2,3)
console.log(retangulo);
console.log(retangulo.cor);
retangulo.cor = "blue"
// retangulo.cor = 'black'
console.log(retangulo.cor);
