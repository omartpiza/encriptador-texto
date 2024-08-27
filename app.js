function validarTexto(texto) {
    var regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

function encriptarTexto() {
    var texto = document.getElementById("inputText").value;
    if (!validarTexto(texto)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Por favor, ingresa solo letras minúsculas y sin acentos.");
        return;
    }
    var textoEncriptado = "";

    texto = texto.toLowerCase();

    textoEncriptado = texto.replace(/e/g, "enter")
                           .replace(/i/g, "imes")
                           .replace(/a/g, "ai")
                           .replace(/o/g, "ober")
                           .replace(/u/g, "ufat");

    document.getElementById("outputText").value = textoEncriptado;
    mostrarTexto();
}

function desencriptarTexto() {
    var texto = document.getElementById("inputText").value;
    if (!validarTexto(texto)) {
        alert("El texto contiene mayúsculas o caracteres especiales. Por favor, ingresa solo letras minúsculas y sin acentos.");
        return;
    }
    var textoDesencriptado = "";

    texto = texto.toLowerCase();

    textoDesencriptado = texto.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");

    document.getElementById("outputText").value = textoDesencriptado;
    mostrarTexto();
}

function copiarTexto() {
    var texto = document.getElementById("outputText").value;

    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles: " + texto);
    }).catch(function(error) {
        alert("No se pudo copiar el texto: " + error);
    });
}

function limpiarTexto() {
    document.getElementById("inputText").value = "";

    document.getElementById("outputText").value = "";

    mostrarTexto(); 
}

function mostrarTexto() {
    var outputText = document.getElementById("outputText");
    var placeholderImage = document.getElementById("placeholderImage");
    var noMessage = document.getElementById("noMessage");
    var inputText = document.getElementById("inputText").value;

    if (inputText.trim() === "") {
        placeholderImage.style.display = "block";
        noMessage.style.display = "block";
        outputText.style.display = "block";
        outputText.value = "";
    } else {
        placeholderImage.style.display = "none";
        noMessage.style.display = "none";
        outputText.style.display = "block";
    }
}