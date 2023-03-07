// Variáveis: 
// var => variavel global, pode ser acessada de qualquer lugar dentro da função.
function example (){
    var x = 10
    if (true){
        var x= 7
        console.log(x)
    }
    console.log(x);
}
// let => só pode ser criada dentro do proprio bloco que foi criada e pode ser redeclarada dentro do seu escopo. 
function example (){
    let y = 10
        y = 5
    if (true){
        let y= 7
        console.log(y)
    }
    console.log(y);
}
// const => uma vez que o valor foi atribuido, ele não pode ser alterado. Exemplo= cpf, não pode ser alterado. 
const cpf = 17654389161
// Tipos de informção que podem ser salvas em variáveis:

// Primitivos:
// Boolean
var a = true;
var b = false;

// Number
var c = 10;
var d = 11.5;

// String
var e = "teste"

// Undefined
var f;
var g = undefined;

// Complexos:
// Function
var a = function () {};
var b = () => {};

// Object
var c = {};
var d = [Array];
var e = null;
