//  Pra declarar um método em uma classe basta fazer, após o construtor, uma função sem usar a palavra function usamos apenas o nome.

class Quadrado {
    constructor(base,altura){
        if(isNaN(base)|| isNaN(altura)) throw new Error("Base e altura precisam ser um valor em numeros")
        this.base = base 
        this.altura = altura 
        this.color = undefined 
    }
    calcularArea(){
        return this.base * this.altura
    }
}
const quadrado = new Quadrado(3,4)
console.log(quadrado);
quadrado.color = 'blue'
console.log(quadrado);
console.log(quadrado.calcularArea());

// Colocando mais de um método na classe:

class Retangulo {
    constructor(base,altura){
        if(isNaN(base)|| isNaN(altura)) throw new Error("Base e altura precisam ser um valor em numeros")
        this.base = base 
        this.altura = altura 
        this.color = undefined 
    }
    calcularArea2(){
        return this.base * this.altura
    }
    duplicarBase(){
        return this.base = this.base * 2
    }
    duplicarAltura(){
        return this.altura = this.altura * 2
    }
    // imprimir(){
    //     return '<div style='width: ${this.base}pageXOffset;height:${this.altura}px;background-color:'blue'></div>
    // }
}
const retangulo = new Retangulo(4,5)
console.log(retangulo);
retangulo.color = 'blue'
console.log(retangulo);
console.log(retangulo.calcularArea2());

retangulo.duplicarBase()
console.log(retangulo);

retangulo.duplicarAltura()
console.log(retangulo);
