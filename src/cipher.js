window.cipher = {
//Creando la propiedad encode y una funcion con dos parametros que se pediran al usuario.
  encode : (Offset,string) => {
      let string2 = string.toUpperCase();
      let OutText = "";
      //recorriendo al string
      for (let i = 0; i < string2.length; i++) {
        if (string2[i] === " "){
          OutText += " "
        } else {
          //preguntar porque funciona con let y sin let *determinando la serie de codigos ascci
          AscciCode = ((string2.charCodeAt(i) - 65 + (Offset%26)) % 26 + 65);
          //de codigo ascci a letra
          OutText += String.fromCharCode(AscciCode);
          }
      }
      return OutText;
      } ,
//Creando la funcion decode
 decode : (Offset,string) => {
      let string2 = string.toUpperCase();
      let OutText = "";
      for (let i = 0; i < string2.length; i++) {
        if (string2[i] === " "){
          OutText += " "
        } else {
          AscciCode = ((string2.charCodeAt(i) - 65 - (Offset%26)+26) % 26 + 65);
          OutText += String.fromCharCode(AscciCode);
        }
      }
      return OutText;
    }};
