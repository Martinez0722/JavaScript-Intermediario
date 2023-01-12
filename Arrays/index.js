//              0, 1, 2, 3, 4, 5, 6, 7, 8
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// Atribuição via desestruturação
const [primeiroNumero, segundoNumero, ...resto] = numeros;
const [um, ,tres, ,cinco, ,sete] = numeros
console.log(primeiroNumero, segundoNumero);
console.log(um, tres, cinco, sete);
console.log(resto)

//                    0         1        2
//                0, 1 ,2    0, 1, 2    0, 1, 2
const numbers = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numbers[1][1]);
