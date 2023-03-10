// É o conceito de negar o acesso aos atributos de uma classe diretamente.

// Usando função em vez de class:
function Quadrado(base,altura){
    this.base = base
    this.altura = altura
    let cor = 'blue'
console.log(cor);
}

const quadrado = new Quadrado(3,4)
console.log(quadrado);
console.log(quadrado.cor);
// quadrado.cor = 'red'
// console.log(quadrado.cor);

// utiliza let no lugar de this para indicar que a cor é um inofrmação 
// privada da classe Quadrado, de forma que ela nao esta acessivel 
// para leitura ou alteração de fora dessa classe.

//  Tambem da pra usar uma factory function, uma função que cria um 
// objeto, para encapsular informações, método que lê o valor privado
// da cor: 
function createQuadrado(base,altura){
    let cor ='blue'
    return{
        base,
        altura,
        getCor : function() {return cor}
    }
}

const quadrado1 = new createQuadrado(4,5)
console.log(quadrado1)
console.log(quadrado1.cor)
console.log(quadrado1.getCor())

// teve que criar uma função retornando o valor do quadrado1, pra conseguir
// pegar o valor que estava dentro da função.


