const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResposta('Peso inválido', false);
        return;
    } 
    
    if (!altura) {
        setResposta('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResposta(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso','Peso normal','Sobrepeso',
    'Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

    if(imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)return nivel[0];
}
    

function getImc(peso, altura) {
    const imc = peso / altura **2;
    return imc.toFixed(2);
}

function criaParagrafo(){
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function setResposta (msg, isValid) {
    const resposta = document.querySelector('#resposta');
    resposta.innerHTML = '';

    const paragrafo = criaParagrafo();

    if (isValid) { 
        paragrafo.classList.add('paragrafo-resultado');
    } else {
        paragrafo.classList.add('bad');
    }

    paragrafo.innerHTML = msg
    resposta.appendChild(paragrafo);
}

