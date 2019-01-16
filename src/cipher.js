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
     return nuevaPalabra
  },

  decode:() =>{

  }
};
