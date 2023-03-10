// Criando objetos:

const pessoal = { nome : "Carlos", idade : 20}
const quadrado ={
    base : 10,
    altura : 10,
    calcularArea : () => this.base * this.altura
}
console.log(quadrado);

// para nos referirmos a um atributo ou metodo do objeto de dentro 
// dele mesmo precisamos usar o prefixo this para saber que é algo
// que pertence ao objeto e nao alguma variavel declarada previamente

const agenda = {
    contatos : [
        {nome : 'contato1', telefone: 'telefone1', email: 'email1@teste.com'},
        {nome : 'contato2', telefone: 'telefone2', email: 'email2@teste.com'},
        {nome : 'contato3', telefone: 'telefone3', email: 'email3@teste.com'},
        {nome : 'contato4', telefone: 'telefone4', email: 'email4@teste.com'}
    ],
    adicionar(contato){
        return this.contatos.push(contato)
    }
}

console.log(agenda);