// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// const data = new Date(ano , mês (0-11), dia, horas, minutos, segundos, milésimos);
// const data = new Date(2019, 0, 20, 15, 14, 27);

// const data = new Date('2019-10-20 20:20:27');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1);
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('ms', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(Date.now())
// console.log(data.toString());

function addZero (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = addZero(data.getDate());
    const mes = addZero(data.getMonth() + 1);
    const ano = addZero(data.getFullYear());
    const hora = addZero(data.getHours());
    const min = addZero(data.getMinutes());
    const seg = addZero(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)