// Classes são a forma de definir as entidades do nosso sistema.
// São estruturas capazes de dar origem a infinitos objetos de mesmo tipo.
// É recomendado colocar a primeira letra do nome da class em maiusculo 

class Teste {
    
}

// as informações necessárias devem ser passadas por parâmetros
// no construtor e atribuida em atributos procedidos por this.

class Pessoa {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}
// para criar um objeto do tipo Pessoa faremos e caso queira
// criar mais objetos, é so adicionar novos objetos, ex:
//  const pessoa2 = new Pessoa('Carlos',30)
const pessoal = new Pessoa('Leticia',20)
console.log(pessoal);
 const pessoa2 = new Pessoa('Carlos',30)
 console.log(pessoa2);
