
let amigos = [];

// Crear mensaje de error dinámicamente si no existe
function inicializarMensajeError() {
    if (!document.getElementById('mensajeError')) {
        const mensaje = document.createElement('p');
        mensaje.id = 'mensajeError';
        mensaje.style.color = 'red';
        mensaje.style.marginTop = '10px';
        mensaje.style.display = 'none';
        const inputSection = document.querySelector('.input-section');
        inputSection.insertBefore(mensaje, document.getElementById('listaAmigos'));
    }
}

// Mostrar mensaje de error de forma amigable
function mostrarMensajeError(mensaje) {
    inicializarMensajeError();
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = mensaje;
    mensajeError.style.display = 'block';

    setTimeout(() => {
        mensajeError.style.display = 'none';
    }, 3000);
}

// Agregar un amigo
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        mostrarMensajeError('Por favor, inserte un nombre.');
        return;
    }

    if (amigos.includes(nombre)) {
        mostrarMensajeError('Este nombre ya fue agregado.');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    input.focus();
    mostrarListaAmigos();
}

// Mostrar la lista actualizada
function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sortear un amigo secreto
function sortearAmigo() {
    const resultadoHtml = document.getElementById('resultado');
    resultadoHtml.innerHTML = '';

    if (amigos.length === 0) {
        mostrarMensajeError('No hay amigos para sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    const li = document.createElement('li');
    li.textContent = `🎉 El amigo secreto es: ${nombreSorteado} 🎉`;
    resultadoHtml.appendChild(li);
}

// Reiniciar la lista (agregá un botón con onclick="reiniciarLista()" si querés usarlo)
function reiniciarLista() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
    const mensaje = document.getElementById('mensajeError');
    if (mensaje) mensaje.style.display = 'none';
}