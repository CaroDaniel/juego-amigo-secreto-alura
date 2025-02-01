// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    console.log(nombreAmigo);

    if(nombreAmigo == ""){
        alert("Debes ingresar un nombre de amigo.");
        return;
    }else{
        amigos.push(nombreAmigo);
    }
    limpiar();

    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        lista.appendChild(nuevoElemento);
    }
};

function limpiar(){
    document.getElementById('amigo').value = "";
}

function sortearAmigo() {
    if(amigos.length === 0){

    }else{
        let indiceAleatorio = Math.floor(Math.random()*amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById('resultado').innerHTML = amigoSorteado;
    }
}








