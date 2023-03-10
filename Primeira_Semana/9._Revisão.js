const somarX =(x) => (y) => x + y
const somar1 = somarX(1)
const somar2 = somarX(2)
const somar3 = somarX(3)
console.log(somar2(3));
console.log(somarX);

function a(x) {
   return function b (y) {
        return x + y
    }
}

//  Retornando valor da função:
const functionsAll = (x) => (n) => x * n

const kabal = functionsAll(2)
console.log(kabal(3));

//  Reduce:

const vetor = [1,2,3,4,5]

const soma = vetor.reduce((a,b) => a + b, 5)
console.log(soma);
// terceiro parametro => geralmente é usado quando uma pessoa quer adicionar um parametro inicial, exemplo= a+b,5 = 5+1=6+2=8+3=11+4=15+5=20 