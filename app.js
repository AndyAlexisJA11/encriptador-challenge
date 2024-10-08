// Función para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

// Función para encriptar el texto
function encriptarTexto() {
    let texto = document.getElementById("valorUsuario").value;

    if (!validarTexto(texto)) {
        mostrarMensajeError("El texto solo debe contener letras minúsculas y sin acentos.");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let texto = document.getElementById("valorUsuario").value;

    if (!validarTexto(texto)) {
        mostrarMensajeError("El texto solo debe contener letras minúsculas y sin acentos.");
        return;
    }

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en el HTML
function mostrarResultado(resultado) {
    let contenedorTexto = document.querySelector(".con-texto");
    let sinTexto = document.querySelector(".sin-texto");

    if (resultado) {
        document.getElementById("texto-encriptado").innerText = resultado;
        contenedorTexto.classList.remove("hidden");
        sinTexto.classList.add("hidden");
    } else {
        contenedorTexto.classList.add("hidden");
        sinTexto.classList.remove("hidden");
    }
}

// Función para mostrar el mensaje de error
function mostrarMensajeError(mensaje) {
    let mensajeError = document.getElementById("mensaje-error");
    mensajeError.textContent = mensaje;
    mensajeError.classList.remove("hidden");
    mensajeError.style.display = "block";
    setTimeout(() => {
        mensajeError.style.display = "none";
    }, 3000); // Ocultar el mensaje después de 3 segundos
}

function copiarTexto() {
    let texto = document.getElementById("texto-encriptado").innerText;
    let textarea = document.createElement('textarea');
    textarea.value = texto;
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        console.log("Texto copiado con éxito.");
        let mensaje = document.getElementById("mensaje");

        if (!mensaje) {
            mensaje = document.createElement("div");
            mensaje.id = "mensaje";
            mensaje.className = "mensaje-advertencia";
            document.querySelector(".con-texto").appendChild(mensaje);
        }

        mensaje.innerText = "Texto copiado!";
        mensaje.style.display = 'block';

        // Ocultar el mensaje después de 3 segundos
        setTimeout(() => {
            mensaje.style.display = 'none';
        }, 3000);
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    } finally {
        document.body.removeChild(textarea);
    }
}

