
document.getElementById("codificar").addEventListener("click",()=>{

let palabraRecibida= document.getElementById("mensaje").value;

let offsetRecibido = document.getElementById("desplazamiento").value;

window.cipher.encode(offsetRecibido,palabraRecibida);

});