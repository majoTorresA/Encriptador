const encriptar = document.querySelector("#encriptar");
const desencriptar = document.querySelector("#desencriptar");
const texto = document.querySelector("#text-area");
const imagen = document.querySelector(".scrn-right__img");
//selecciona tanto la etiqueta p como el h2 con clase "info"
const noTexto = document.querySelectorAll("p[class='info'], h2[class='info']");
const mostrarTexto = document.querySelector(".mostrar-texto");
const copy = document.querySelector(".boton-copiar");

//Se evita que el boton de copiar se despliegue al cargar la página cuando no hay texto
document.addEventListener("DOMContentLoaded", () => {
  if (texto.value === "") {
    copy.style.display = "none";
  }
});
//Al escribir la letra se transforma en solo minuscula y sin simbolos
texto.addEventListener("keyup", () => {
  //Expresion regular en replace para que no haya simbolos
  texto.value = texto.value.toLowerCase().replace(/[^a-z\s]/g, "");
 
});

let isencriptado = false;
texto.addEventListener("input", () => {
  if (texto.value === "") {
    isencriptado = false;
    ///Si no hay texto o se borra, se verá la imagen y texto que informa que no se ha introducido txt
    imagen.style.display = "block";
    noTexto.forEach((el) => (el.style.display = "block"));
    mostrarTexto.style.display = "none";
    mostrarTexto.innerText = "";
    copy.style.display = "none";
  } else {
    imagen.style.display = "none";
    noTexto.forEach((el) => (el.style.display = "none"));
    mostrarTexto.style.display = "block";
    mostrarTexto.innerText = texto.value;
    if (texto.value !== "") {
      copy.style.display = "flex";
    }
  }
});
//Clave del encriptado
const encripta = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

encriptar.addEventListener("click", () => {
  if (texto.value !== "" && !isencriptado) {
    //Al dar click se esconde la imagen y texto derecho que indica que no hay texto introducido
    imagen.style.display = "none";
    //Recorre a estos elementos y los remueve
    noTexto.forEach((el) => (el.style.display = "none"));
    //se reemplazan las vocales utilizando un for para recorrer el texto
    let encriptado = "";
    for (let i = 0; i < texto.value.length; i++) {
      if (encripta[texto.value[i]]) {
        encriptado += encripta[texto.value[i]];
      } else {
        encriptado += texto.value[i];
      }
    }
    texto.value = encriptado;
    isencriptado = true;
    //muestra el texto solo si hay texto adentro
    mostrarTexto.style.display = "block";
    mostrarTexto.innerText = texto.value;
    copy.style.display = "flex";
  }
});

desencriptar.addEventListener("click", () => {
  if (texto.value !== "") {
    //Al dar click se esconde la imagen y texto derecho que indica que no hay texto introducido
    imagen.style.display = "none";
    //Recorre a estos elementos y los remueve
    noTexto.forEach((el) => (el.style.display = "none"));
    //usando expresiones regulares, se reemplaza cada vocal encriptada con su valor original
    texto.value = texto.value
      .replace(/ai/g, "a")
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");

    //muestra el texto solo si hay texto adentro
    mostrarTexto.style.display = "block";
    mostrarTexto.innerText = texto.value;
    copy.style.display = "flex";
    isencriptado = false;
  }
});

copy.addEventListener("click", ()=>{
  navigator.clipboard.writeText(texto.value).then(
    () => alert("Texto copiado al portapapeles!"),
    (error) => alert("Hubo un error al intentar copiar el texto",error)
)})
