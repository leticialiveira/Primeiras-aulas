// Funções => Trecho de código que damos um nome e é executado a cada vez que é chamado =

function geradorNumerico (){
    for(i=0; i< 10; i++){
        console.log(i);
    }
}
geradorNumerico()

function geradorNumericoo (comeco,fim){
    for(i=comeco; i<fim; i++){
        console.log(i);
    }
}
geradorNumericoo(10,20)

function soma(a,b){
    return a + b
}
const resultado = soma(2,3)
console.log(resultado);

// exemplo de função de flecha =

const mmundo = () => {return 'Hello Word'}
console.log(mmundo());

const mundo = (name) => { return 'Hello ' + name}
console.log(mundo('Leticia'));

// Recendo uma função como parâmetro:

const somar = (a,b) => a + b
const subtrair = (a,b) => a - b
const aplicarOperacao = (a, b, operacao) => operacao(a,b)

const resultado1 = aplicarOperacao(2,5,somar)
const resultado2 = aplicarOperacao(2,5,subtrair)
console.log(resultado1)
console.log(resultado2)

// Retornando funções:

const somarX =(x) => (y) => x + y
const somar1 = somarX(1)
const somar2 = somarX(2)
const somar3 = somarX(3)
console.log(somar2(3));
console.log(somarX);
// somarX ta pegando o valor de X e somar1 ta pegando o valor de y