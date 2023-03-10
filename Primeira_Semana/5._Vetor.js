//  Vetor ou Array:
let vetor = [0,1,2,3,4,5]
console.log(vetor);
console.log(vetor[2]);

// é possivel declarar o vetor vazio e ir adicionando:
let vetorr = []
vetorr[0] = 'a'
vetorr['indice1'] = 'b'
console.log(vetorr);

// vetores são considerados heterogenos, ou seja, podem guardar valores diferentes:
let vettor = [1, 3, 'b', true]
console.log(vettor[2]);

//  percorrendo um vetor:

// for=

let veetor = [ 10, 20, 30, 40, 50]
for(i = 0; i<veetor.length; i++){
    console.log(veetor[i]);
}

// for-of => recebe um valor e a variavel declarada dentro do for vai receber todos esses valores do array =

let vetoor = [ 10, 20, 30, 40, 50]
for(let valor of vetoor){
    console.log(valor);
}

// for-in => a variavel recebe os valores do indice do vetor passado=

let vvetor = [10, 20, 30, 40, 50]
for(let indice in vvetor){
    console.log(indice);
}

// matrizes => são vetores maiores, no caso, pra pegar o valor de cada parte precisaria colocar dois laços de repetição.

const matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for(let linha of matriz){
    for(let dados of linha){
        console.log(dados);
    }
}

// Vetores dinâmicos:

// push => colocar o elemento no final=
let teste = [10,20,30,40,50]
let novo_elemento = 60
teste.push(novo_elemento)
teste

// pop => remover um elemento do final =
teste.pop()
console.log(teste)

// unsheft => adiconar um elemento ao inicio =
teste.unshift(novo_elemento)
console.log(teste);

// shift => tirar um elemento do inicio =
teste.shift()
console.log(teste);