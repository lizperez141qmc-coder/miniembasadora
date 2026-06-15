let corriendo=false;
let contador=0;
let espera=0;
const LIMITE=3;
let timer;

function actualizar(){
document.getElementById('contador').textContent=contador;
document.getElementById('espera').textContent=espera;
document.getElementById('alerta').style.display=espera>LIMITE?'block':'none';
}

function iniciar(){
if(corriendo)return;
corriendo=true;
document.getElementById('estado').textContent='Produciendo';
document.getElementById('cinta').classList.add('mover');
timer=setInterval(()=>{
contador++;
actualizar();
},2000);
}

function detener(){
corriendo=false;
document.getElementById('estado').textContent='Detenido';
document.getElementById('cinta').classList.remove('mover');
clearInterval(timer);
}

function reiniciar(){
detener();
contador=0;
espera=0;
actualizar();
}

function agregarBotella(){
espera++;
actualizar();
}
actualizar();
