


//Evento del botón codificar
// Llama al elemento por su "id" identificador, y ejecutara las funciones otorgadas al dar click
document.getElementById("codificar").addEventListener("click",()=>{
//Obtiene el contenido otorgado por el usuario (en este caso el mensaje a codificar)
let palabraRecibida= document.getElementById("mensaje").value;
//Obtiene el contenido otorgado por el usuario (el número de desplazamiento)
let offsetRecibido = document.getElementById("desplazamiento").value;

//Se posiciona en el elemento por su "id" identificador y muestra el resultado del la función "encode"
document.getElementById("mensajefinal").innerHTML=window.cipher.encode(offsetRecibido,palabraRecibida);

}); 



//Evento del botón decodificar
//Llama al elemento por su "id" identificador, y ejecutara las funciones otorgadas al dar click
document.getElementById("decodificar").addEventListener("click", () =>{
 //Obtiene el contenido otorgado por el usuario (en este caso el mensaje a codificar)  
   let palabraOtorgada= document.getElementById("mensaje").value;
 //Obtiene el contenido otorgado por el usuario (el número de desplazamiento)  
   let offsetOtorgado= document.getElementById("desplazamiento").value;

//Se posiciona en el elemento por su "id" identificador y muestra el resultado del la función "decode"
document.getElementById("mensajefinal").innerHTML=window.cipher.decode(offsetOtorgado,palabraOtorgada);

} );