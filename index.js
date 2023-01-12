const encriptar = document.querySelector("#encriptar")
const desencriptar = document.querySelector("#desencriptar")
const texto = document.querySelector("#text-area")

texto.addEventListener("keyup", ()=>{
    //Expresion regular en replace para que no haya simbolos
    texto.value = texto.value.toLowerCase().replace(/[^a-z\s]/g, "");
})

