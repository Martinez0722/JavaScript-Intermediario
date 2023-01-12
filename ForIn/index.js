// For in -> lê indices ou chaves do objeto
// Retorna o indice ou chave (string, array ou objetos)
// const frutas = ['Pêra', 'Maçã', 'Uva'];

// for (let index in frutas) {
//     console.log(frutas [index]);
// }

const pessoa = {
    nome: 'Gary',
    sobrenome: 'James',
    idade: 30
}

for (let i in pessoa) {
    console.log(i);
}

for (let key in pessoa) {
    console.log(key, pessoa[key]);
}