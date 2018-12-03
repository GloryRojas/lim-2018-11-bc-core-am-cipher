window.cipher = {
//Creando la funcion encode
  encode : (Offset,string) => {
    //Creamos una letiable que pase a mayusculas el texto ingresado.
      let string2 = string.toUpperCase();
      let OutText = '';
      for (let i = 0; i < string2.length; i++) {
        if (string2[i] === ' '){
          OutText += ' '
        } else {
          let AscciCode = ((string2.charCodeAt(i) - 65 + (Offset%26)) % 26 + 65);
          OutText += String.fromCharCode(AscciCode);
          }
      }
      return OutText;
      } ,
//Creando la funcion decode
 decode : (Offset,string) => {
      let string2 = string.toUpperCase();
      let OutText = '';
      for (let i = 0; i < string2.length; i++) {
        if (string2[i] === ' '){
          OutText += ' '
        } else {
          let AscciCode = ((string2.charCodeAt(i) - 65 - (Offset%26)+26) % 26 + 65);
          OutText += String.fromCharCode(AscciCode);
        }
      }
      return OutText;
    }};
