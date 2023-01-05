/*
Operadores de comparação
> maior que
>= maior ou igual a
< menor que
<= menor ou igual a
== igual (valor)******
=== estritamente igual (valor e tipo)
!= Diferente (valor)******
!== estritamente diferente (valor e tipo)
*/
const num1 = 10;
const num2 = 12;

const comp = num1 < num2;
console.log(comp);

const num3 = 15;
const num4 = '15';
const comp2 = num3 === num4;
const comp3 = num3 == num4;
console.log(comp2, comp3);