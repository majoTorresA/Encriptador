const encriptar = document.querySelector("#encriptar")
const desencriptar = document.querySelector("#desencriptar")
const texto = document.querySelector("#text-area")
const imagen = document.querySelector(".scrn-right__img")
//selecciona tanto la etiqueta p como el h2 con clase "info"
const noTexto = document.querySelectorAll("p[class='info'], h2[class='info']");


//Al escribir la letra se transforma en solo min y sin simbolos
texto.addEventListener("keyup", ()=>{
    //Expresion regular en replace para que no haya simbolos
    texto.value = texto.value.toLowerCase().replace(/[^a-z\s]/g, "");
})
//Si no hay texto o se borra, se verá la imagen y texto que informa que no se ha introducido txt
texto.addEventListener("input", () => {
    if (texto.value === "") {
      imagen.style.display = "block";
      noTexto.forEach(el => el.style.display = "block");
    }
  });
  //Al dar click se esconde la imagen y texto derecho que indica que no hay texto introducido
encriptar.addEventListener("click", () =>{
    if (texto.value !== ""){
        imagen.style.display = "none"
        //Recorre a estos elementos y los remueve
        noTexto.forEach(el => el.style.display = "none");

        const mostrarTexto = document.querySelector(".mostrar-texto");
    mostrarTexto.innerText = texto.value;
    
    }

})