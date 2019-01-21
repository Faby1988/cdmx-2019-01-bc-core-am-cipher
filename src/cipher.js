window.cipher = {


//función codificar
  encode: (offsetRecibido,palabraRecibida) => {
    let i=0; //Declaramos la variable "i"
    palabraRecibida= palabraRecibida.toUpperCase(); //Aseguramos que la palabra este en mayúscula
    let nuevaPalabra=""; //Creamos una variable que guarde "los resultados" de la función
    for(i=0; i<palabraRecibida.length; i++){ //Iniciamos control de flujo
      let palabraAscii= (palabraRecibida.charCodeAt(i) - 65 + parseInt(offsetRecibido)) %26 +65;
      let palabraNormal= String.fromCharCode(palabraAscii);
      nuevaPalabra+=palabraNormal;
     }
     return nuevaPalabra; //Regresa la nueva palabra (el resultado)
  },

  //función decodificar
  decode: (offsetOtorgado,palabraOtorgada) => {
    let i=0;//Declaramos la variable "i"
    palabraOtorgada=palabraOtorgada.toUpperCase();//Aseguramos que la palabra este en mayúscula
    let newWord=""; //Creamos una variable que guarde "los resultados" de la función
    for(i=0; i<palabraOtorgada.length; i++){ //Iniciamos control de flujo
      let asciiPalabra= (palabraOtorgada.charCodeAt(i) + 65 - parseInt(offsetOtorgado)) %26 + 65;
      let normalPalabra= String.fromCharCode(asciiPalabra);
      newWord+=normalPalabra;
    }
    return newWord; //Regresa la nueva palabra (el resultado)
  },


};
