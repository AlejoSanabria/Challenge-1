const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const titulo = document.getElementById("titulo");
const subtitulo = document.getElementById("subtitulo");
const muneco = document.getElementById("muneco");
const mensajeFinal = document.getElementById("mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function ocultar(){
    muneco.classList.add("oculto");
    titulo.classList.add("oculto");
    subtitulo.classList.add("oculto");
    mensajeFinal.classList.remove("oculto")  
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    ocultar();
}


function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()
    

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }

    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    ocultar();
}


function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }
    return stringDesencriptado
}

const btnCopiar = document.querySelector(".btn-copiar"); 

btnCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(mensaje.value) 
      .then(() => {
        alert("Texto copiado");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  });


