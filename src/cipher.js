window.cipher = {



  encode: (offsetRecibido,palabraRecibida) => {
    let i=0;
    palabraRecibida= palabraRecibida.toUpperCase();
    let nuevaPalabra="";
    for(i=0; i<palabraRecibida.length; i++){
      let palabraAscii= (palabraRecibida.charCodeAt(i) - 65 + parseInt(offsetRecibido)) %26 +65;
      let palabraNormal= String.fromCharCode(palabraAscii);
      nuevaPalabra+=palabraNormal;
     }
     return nuevaPalabra;
  },

  decode: (offsetOtorgado,palabraOtorgada) => {
    let i=0;
    palabraOtorgada=palabraOtorgada.toUpperCase();
    let newWord="";
    for(i=0; i<palabraOtorgada.length; i++){
      let asciiPalabra= (palabraOtorgada.charCodeAt(i) + 65 - parseInt(offsetOtorgado)) %26 + 65;
      let normalPalabra= String.fromCharCode(asciiPalabra);
      newWord+=normalPalabra;
    }
    return newWord;
  },


};
