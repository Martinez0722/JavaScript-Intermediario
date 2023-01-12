const pessoa = {
    nome: 'João',
    sobrenome:'Cintra',
    idade: 30,
    endereco: {
        rua: 'Av. Espanha',
        numero: 300
    }
};

// Atribuição via desetruturação

// const { nome, sobrenome} = pessoa;
// const { 
//     endereco: { 
//         rua: r = 12345, 
//         numero 
//     },
//  } = pessoa;
// console.log(r, numero);
const { nome, sobrenome, ...resto } = pessoa;
console.log(resto);