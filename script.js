'use strict';

const formatarDigito = (digito) => `0${digito}`.slice(-2);


const atualizar = (tempo) =>{
    const segudos = document.getElementById('segundos');
    const qntdSegudos = tempo % 60;

    const minutos = document.getElementById('minutos');
    const qntdMinutos = Math.floor((tempo % (60 * 60)) / 60);

    const horas = document.getElementById('horas');
    const qntdHoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));

    const dias = document.getElementById('dias');
    const qtdDias = Math.floor(tempo / (60 * 60 * 24));


    segudos.textContent = formatarDigito(qntdSegudos);
    minutos.textContent = formatarDigito(qntdMinutos);
    horas.textContent = formatarDigito(qntdHoras);
    dias.textContent = formatarDigito(qtdDias);
}

const contagemRegresiva = (tempo) => {
    const pararContagem = () => {
        clearInterval(id);
    }
    
    const contar = () => {
        if(tempo === 0){
            pararContagem();
        }
        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
    const dataEvento = new Date('2024-10-18 20:00:00');
    const hoje = Date.now();
    return Math.floor((dataEvento - hoje) / 1000);
}

contagemRegresiva(tempoRestante());
