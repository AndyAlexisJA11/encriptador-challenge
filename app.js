// Función para encriptar el texto
function encriptarTexto() {
    let texto = document.getElementById("valorUsuario").value;
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

//funcion para copiar el texto
function copiarTexto() {
    let texto = document.getElementById("texto-encriptado").innerText;
    navigator.clipboard.writeText(texto)
        .then(() => {
            let mensaje = document.getElementById("mensaje");

            if (!mensaje) {
                mensaje = document.createElement("div");
                mensaje.id = "mensaje";
                mensaje.className = "mensaje-elegante";
                document.querySelector(".con-texto").appendChild(mensaje);
            }

            mensaje.innerText = "Texto copiado al portapapeles!";
            mensaje.style.display = 'block';

            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
                mensaje.style.display = 'none';
            }, 3000);
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}