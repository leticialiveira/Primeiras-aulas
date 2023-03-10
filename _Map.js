// Função Map => usada para transformar vetores, a função é aplicada a cada item do vetor

const vetor = [1,2,3,4,5,6]
const dobro = (item) => 2 * item
const vetorDobrado = vetor.map(dobro)
console.log(vetorDobrado);

// ou 
const vetorDobradoJunto = vetor.map((item) => 2 * item)
console.log(vetorDobradoJunto);
