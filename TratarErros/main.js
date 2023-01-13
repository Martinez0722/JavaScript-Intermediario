// try {
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log(a);
//     console.log('Fechei o arquivo');
//  // Executada quando não há erros
// } catch (e) {
//     console.log('Tratando o erro');
//  // Executada quando há erros
// } finally {
//     console.log('FINALLY: Sempre executado');
//  // Sempre executada
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)){
        throw new TypeError ('Esperando instância de Date.');
    }
    
    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

const data = new Date('01-01-1970 12:58:12');
const hora = retornaHora();
console.log(hora);