
document.getElementById("codificar").addEventListener("click",()=>{

let palabraRecibida= document.getElementById("mensaje").value;

let offsetRecibido = document.getElementById("desplazamiento").value;

//window.cipher.encode(offsetRecibido,palabraRecibida);

document.getElementById("mensajefinal").innerHTML=window.cipher.encode(offsetRecibido,palabraRecibida);

}); 


document.getElementById("decodificar").addEventListener("click", () =>{
   let palabraOtorgada= document.getElementById("mensaje").value;
   let offsetOtorgado= document.getElementById("desplazamiento").value;

document.getElementById("mensajefinal").innerHTML=window.cipher.decode(offsetOtorgado,palabraOtorgada);

} );