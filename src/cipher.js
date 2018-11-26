window.cipher = {
  encode : (inText,Offset) => {
      var inText2 = inText.toUpperCase()
      var OutText = ''
      for (var i = 0; i < inText2.length; i++) {
        if (inText2[i] === ' '){
          OutText += ' ';
        } else {
          AscciCode = ((inText2.charCodeAt(i) - 65 + (Offset%26)) % 26 + 65);
          OutText += String.fromCharCode(AscciCode);
          }
      }
      return OutText;
      } ,
 decode : (inText,Offset) => {
      var inText2 = inText.toUpperCase()
      var OutText = ''
      for (var i = 0; i < inText2.length; i++) {
        if (inText2[i] === ' '){
          OutText += ' ';
        } else {
          AscciCode = ((inText2.charCodeAt(i) - 65 - (Offset%26)+26) % 26 + 65);
          OutText += String.fromCharCode(AscciCode);
          }
      }
      return OutText;
    }
 };
