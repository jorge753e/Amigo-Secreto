// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let numSorteado = 0;
let listaDeAmigos = [];

// function de asisgnar texto al elemento 
function asignarTextoElementoLista(elemento,lista){
    let elementoHTML = document.querySelector(elemento);
    let listaHTML = "";
    for (let item of lista) {
        listaHTML += `<li>${item}</li>`;
    }
    elementoHTML.innerHTML = listaHTML;
    return;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
  }

// usar despues de añadir para limpiar la caja 
function limpiarCaja(cajaElemento,texto){
    // document.querySelector('#amigo').value = '';
    let elementoCaja = document.querySelector(cajaElemento);
   // document.querySelector(cajaElemento).value = "";
   elementoCaja.innerHTML = texto;
    return;
}

// Creando la lista de amigo que se sortearan 
function agregarAmigo(){
    if(document.getElementById('amigo').value != ''){
        listaDeAmigos.push(document.getElementById('amigo').value); 
        
        //cambia el valor del input Lo limpia
        let miInput = document.querySelector("#amigo");
        miInput.value = "";
        asignarTextoElementoLista('ul',listaDeAmigos);
        }else{
        alert("Debe colocar el nombre de un amigo para el sorteo");
        }
}

// MOSTRAR AMIGOS SECRETOS EN EL UL 
function sortearAmigo(){
    
    // ENCONTRAR EL N TOTAL DE LA LISTA 
    let numLista = listaDeAmigos.length;
    if(numLista!=0){
    // GENERAR UN NUMERO ALEATORIO ENTRE 0 A N  
    numSorteado = Math.floor(Math.random()*numLista);
    console.log(numSorteado);
    // ESE NUMERO SERA EL INDICE DE LA LISTA 
    limpiarCaja("#listaAmigos","");
    asignarTextoElemento('#resultado', `El amigo secreto sorteado es: ${listaDeAmigos[numSorteado]}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        alert('No se puede sortear porquue no ha ingresado nombres');
    }
    return;
   
}
function condicionesIniciales(){
    numSorteado = 0;
    listaDeAmigos = [];
    asignarTextoElemento('#resultado','');

}

function reiniciarJuego(){
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}






