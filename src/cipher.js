window.cipher = {
//Creando la funcion encode
  encode : (Offset,inText) => {
    //Creamos una variable que pase a mayusculas el texto ingresado.
      var inText2 = inText.toUpperCase();
      var OutText = '';
      for (var i = 0; i < inText2.length; i++) {
        if (inText2[i] === ' '){
          OutText += ' '
        } else {
          let AscciCode = ((inText2.charCodeAt(i) - 65 + (Offset%26)) % 26 + 65);
          OutText += String.fromCharCode(AscciCode);
          }
      }
      return OutText;
      } ,
//Creando la funcion decode
 decode : (Offset,inText) => {
      var inText2 = inText.toUpperCase();
      var OutText = '';
      for (var i = 0; i < inText2.length; i++) {
        if (inText2[i] === ' '){
          OutText += ' '
        } else {
          let AscciCode = ((inText2.charCodeAt(i) - 65 - (Offset%26)+26) % 26 + 65);
          OutText += String.fromCharCode(AscciCode);
        }
      }
      return OutText;
    }};
