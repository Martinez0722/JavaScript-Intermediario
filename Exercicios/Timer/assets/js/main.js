function relogio() {
    function getTimeBySeconds (segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT',
        });
    }

    const relogio = document.querySelector('.relogio')
    let segundos = 0;
    let timer;

    document.addEventListener('click', function(e){
        const element = e.target;

        if(element.classList.contains('iniciar')){
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciaRelogio();
        }
        
        if(element.classList.contains('pausar')){
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
        
        if(element.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML='00:00:00';
            segundos = 0;
            relogio.classList.remove('pausado');
        }
    } )

    function iniciaRelogio() {
        timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = getTimeBySeconds(segundos);
        }, 1000);
    }
}

relogio()


